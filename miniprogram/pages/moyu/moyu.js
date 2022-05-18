// pages/moyu/moyu.js
import { HolidayCalculater } from '../../utils/holidayCalculater'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    leftValue: 0,
    fishState: true,
    cnt: 0,
    countdownNumber: '',
    isHoliday: undefined, // 今天是不是假期,
    holidayName: '假期',
    progress_width:'80%'
  },
  // 倒计时定时器
  countdownTimer: null,

  // 下一个工作日或假期
  anchorDate: null,

  initData() {
    this.setData({
      isHoliday: HolidayCalculater.isHoliday(new Date()),
    })
    if (this.data.isHoliday) {
      this.anchorDate = HolidayCalculater.getRecentWorkDay(new Date());
    } else {
      this.setData({
        holidayName: HolidayCalculater.getRecentHolidayName(new Date())
      })
      this.anchorDate = HolidayCalculater.getRecentHoliday(new Date());
    }
    // this.anchorDate = this.data.isHoliday ?
    //   HolidayCalculater.getRecentWorkDay(new Date()) :
    //   HolidayCalculater.getRecentHoliday(new Date())
  },

  calculateTime() {
    const setCountdown = () => {
      const countdown = ((anchor.getTime() - Date.now()) / (1000 * 60 * 60 * 24)).toFixed(5);
      this.setData({
        countdownNumber: countdown + ''
      });
    }
    const anchor = this.anchorDate;
    setCountdown();
    this.countdownTimer = setInterval(setCountdown, 120);
  },

  // 鱼动画的点击响应函数 
  fishTap() {
    clearInterval(this.data.timer);
    if (this.data.fishState) {
      this.setData({
        leftValue: this.data.leftValue = 0,
      })
    } else {
      this.setData({
        leftValue: this.data.leftValue = -8 * 18,
      })
    }
    this.data.cnt = 0;
    if (this.data.fishState) {
      this.data.timer = setInterval(() => {
        this.setData({
          leftValue: this.data.leftValue - 18,
          cnt: this.data.cnt + 1,
        })
        if (this.data.cnt === 8) {
          clearInterval(this.data.timer);
          this.setData({
            fishState: false,
          })
        }
      }, 100);
    }
    else {
      this.data.timer = setInterval(() => {
        this.setData({
          leftValue: this.data.leftValue + 18,
          cnt: this.data.cnt + 1,
        })
        if (this.data.cnt === 8) {
          clearInterval(this.data.timer);
          this.setData({
            fishState: true
          })
        }
      }, 120);

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.initData();
    this.calculateTime();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})