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
    isHoliday: undefined, // 今天是不是假期
  },
  // 倒计时定时器
  countdownTimer: null,

  // 下一个工作日或假期
  anchorDate: null,

  initData() {
    this.setData({
      isHoliday: HolidayCalculater.judgeDate(new Date())
    })
    this.anchorDate = this.data.isHoliday ?
      HolidayCalculater.getRecentWorkDay(new Date()) :
      HolidayCalculater.getRecentHoliday(new Date())
    // console.log(this.anchorDate);
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

    // // 获取到周末的剩余时间
    // function getTimeLess() {
    //   let _date = new Date();
    //   let _nowTime = _date.getTime();
    //   let _week = _date.getDay();
    //   let _dayLongTime = 24 * 60 * 60 * 1000;
    //   let zeroTime = new Date();
    //   zeroTime.setHours(0);
    //   zeroTime.setMinutes(0);
    //   zeroTime.setSeconds(0);
    //   zeroTime.setMilliseconds(0);
    //   let _lessms = _nowTime - zeroTime.getTime();
    //   let _furtureSaturdayTimes = (6 - _week) * _dayLongTime - _lessms;
    //   return _furtureSaturdayTimes / _dayLongTime;
    // }

    // // 获取当前剩余时间（小数点后面的）
    // function getTodayTimeLess() {
    //   let _date = new Date();
    //   let _nowTime = _date.getTime();
    //   let _dayLongTime = 24 * 60 * 60 * 1000;
    //   let zeroTime = new Date();
    //   zeroTime.setHours(0);
    //   zeroTime.setMinutes(0);
    //   zeroTime.setSeconds(0);
    //   zeroTime.setMilliseconds(0);
    //   let _currtime = _nowTime - zeroTime.getTime();
    //   return (_dayLongTime - _currtime) / _dayLongTime;
    // }

    // const Month = [];

    // // 设置2021年每日是否为节假日
    // function set2021Arr(Month) {
    //   if (!Array.isArray(Month)) {
    //     return;
    //   }
    //   let day = 5;
    //   for (let i = 1; i <= 12; i++) {
    //     Month[i] = [];
    //   }

    //   function setMonth(Month, total) {
    //     Month[0] = total;
    //     for (let j = 1; j <= total; j++) {
    //       if (day === 6 || day === 7) {
    //         Month[j] = true;
    //       } else {
    //         Month[j] = false;
    //       }
    //       day++;
    //       if (day === 8)
    //         day = 1;
    //     }
    //     return;
    //   }

    //   setMonth(Month[1], 31);
    //   setMonth(Month[2], 28);
    //   setMonth(Month[3], 31);
    //   setMonth(Month[4], 30);
    //   setMonth(Month[5], 31);
    //   setMonth(Month[6], 30);
    //   setMonth(Month[7], 31);
    //   setMonth(Month[8], 31);
    //   setMonth(Month[9], 30);
    //   setMonth(Month[10], 31);
    //   setMonth(Month[11], 30);
    //   setMonth(Month[12], 31);

    //   Month[1][1] = true;
    //   Month[1][2] = true;
    //   Month[1][3] = true;
    //   Month[2][7] = false;
    //   Month[2][11] = true;
    //   Month[2][12] = true;
    //   Month[2][13] = true;
    //   Month[2][14] = true;
    //   Month[2][15] = true;
    //   Month[2][16] = true;
    //   Month[2][17] = true;
    //   Month[2][20] = true;
    //   Month[4][3] = true;
    //   Month[4][4] = true;
    //   Month[4][5] = true;
    //   Month[4][25] = false;
    //   Month[5][1] = true;
    //   Month[5][2] = true;
    //   Month[5][3] = true;
    //   Month[5][4] = true;
    //   Month[5][5] = true;
    //   Month[5][8] = false;
    //   Month[6][12] = true;
    //   Month[6][13] = true;
    //   Month[6][14] = true;
    //   Month[9][18] = false;
    //   Month[9][19] = true;
    //   Month[9][20] = true;
    //   Month[9][21] = true;
    //   Month[9][26] = false;

    //   for (let i = 1; i < 8; i++) {
    //     Month[10][i] = true;
    //   }
    //   Month[10][9] = false;
    // }
    // set2021Arr(Month);

    // // 设置定时器使倒计时开始
    // let timer = setInterval(() => {
    //   let d = new Date(); // 现在的时间
    //   let _day = d.getDate(); // 当前日期
    //   let _month = d.getMonth() + 1; // 当前月份

    //   // 是节假日 
    //   if (Month[_month][_day]) {
    //     // 双休日
    //     this.setData({
    //       t1Text: "摸鱼快乐！！"
    //     })
    //     // return;
    //     let dayPt = _day;
    //     let monthPt = _month; // 存储月份

    //     if (dayPt === Month[monthPt][0]) {
    //       dayPt = 1; // 从下一天开始计数
    //       monthPt++;
    //     }
    //     else {
    //       dayPt++;
    //     }
    //     let cnt = 0;

    //     while (Month[monthPt][dayPt]) {
    //       // 不是月末，计数器加一，日期加一
    //       if (dayPt !== Month[monthPt][0]) {
    //         cnt++;
    //         dayPt++;
    //       }
    //       // 是月末，计数器加一，月份加一
    //       else {
    //         cnt++;
    //         dayPt = 1;
    //         if (monthPt < 12) {
    //           monthPt++;
    //         }
    //         else { // 12月末需要重新维护Month数组
    //           console.log("需要维护啦！");
    //         }
    //       }
    //     }
    //     this.setData({
    //       t2Highlight: "还可以摸鱼" + ((cnt + getTodayTimeLess()).toFixed(5)),
    //       t2Text: "天~"
    //     })
    //   }
    //   // 不是节假日
    //   else {
    //     let dayPt = _day;
    //     let monthPt = _month; // 存储月份

    //     if (dayPt == Month[monthPt][0]) {
    //       dayPt = 1; // 从下一天开始计数
    //       monthPt++;
    //     }
    //     else {
    //       dayPt++;
    //     }

    //     let cnt = 0;
    //     // 循环判断下一个假期还有多少整天
    //     while (!Month[monthPt][dayPt]) {
    //       // 不是月末，计数器加一，日期加一
    //       if (dayPt !== Month[monthPt][0]) {
    //         cnt++;
    //         dayPt++;
    //       }
    //       // 是月末，计数器加一，月份加一
    //       else {
    //         cnt++;
    //         dayPt = 1;
    //         if (monthPt < 12) {
    //           monthPt++;
    //         } else { // 12月末需要重新维护Month数组
    //           console.log("需要维护啦！");
    //         }
    //       }
    //     }
    //     // console.log(cnt);
    //     this.setData({
    //       t1Text: "距离假期快乐摸鱼还有：",
    //       t2Highlight: (cnt + getTodayTimeLess()).toFixed(6),
    //       t2Text: "天！！"
    //     })
    //   }
    // }, 120)

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