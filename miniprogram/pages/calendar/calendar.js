// pages/calendar/calendar.js
import { HolidayCalculater } from '../../utils/holidayCalculater'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    show: false,
    formatter(day) {
      if (HolidayCalculater.judgeDate(day.date)) {
        day.topInfo = "可摸鱼";
      }
      return day;
    },
  },

  // onDisplay() {
  //   this.setData({ show: true });
  // },
  // onClose() {
  //   this.setData({ show: false });
  // },
  // formatDate(date) {
  //   date = new Date(date);
  //   return `${date.getMonth() + 1}/${date.getDate()}`;
  // },
  // onConfirm(event) {
  //   const [start, end] = event.detail;
  //   this.setData({
  //     show: false,
  //     date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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