// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    show: false,
    formatter(day) {
      const Month = [];

      // 设置2021年每日是否为节假日
      function set2021Arr(Month) {
        if (!Array.isArray(Month)) {
          return;
        }
        let day = 5;
        for (let i = 1; i <= 12; i++) {
          Month[i] = [];
        }

        function setMonth(Month, total) {
          Month[0] = total;
          for (let j = 1; j <= total; j++) {
            if (day === 6 || day === 7) {
              Month[j] = true;
            } else {
              Month[j] = false;
            }
            day++;
            if (day === 8)
              day = 1;
          }
          return;
        }

        setMonth(Month[1], 31);
        setMonth(Month[2], 28);
        setMonth(Month[3], 31);
        setMonth(Month[4], 30);
        setMonth(Month[5], 31);
        setMonth(Month[6], 30);
        setMonth(Month[7], 31);
        setMonth(Month[8], 31);
        setMonth(Month[9], 30);
        setMonth(Month[10], 31);
        setMonth(Month[11], 30);
        setMonth(Month[12], 31);

        Month[1][1] = true;
        Month[1][2] = true;
        Month[1][3] = true;
        Month[2][7] = false;
        Month[2][11] = true;
        Month[2][12] = true;
        Month[2][13] = true;
        Month[2][14] = true;
        Month[2][15] = true;
        Month[2][16] = true;
        Month[2][17] = true;
        Month[2][20] = true;
        Month[4][3] = true;
        Month[4][4] = true;
        Month[4][5] = true;
        Month[4][25] = false;
        Month[5][1] = true;
        Month[5][2] = true;
        Month[5][3] = true;
        Month[5][4] = true;
        Month[5][5] = true;
        Month[5][8] = false;
        Month[6][12] = true;
        Month[6][13] = true;
        Month[6][14] = true;
        Month[9][18] = false;
        Month[9][19] = true;
        Month[9][20] = true;
        Month[9][21] = true;
        Month[9][26] = false;

        for (let i = 1; i < 8; i++) {
          Month[10][i] = true;
        }
        Month[10][9] = false;
      }
      set2021Arr(Month);
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (Month[month][date]) {
        day.topInfo = "可摸鱼";
        }
      
      return day;
    },
  },

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },

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