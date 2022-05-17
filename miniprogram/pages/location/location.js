// pages/location/location.js
// key : F45BZ-NDUCD-X6R4H-HVX6Y-ZCPHQ-M3FG3

Page({

    /**
     * 页面的初始数据
     */
    data: {
      curlatitude: undefined,
      curlongitude: undefined,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let that = this;
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          // const speed = res.speed
          // const accuracy = res.accuracy
          // setLocation(latitude, longitude)
          // console.log(this)
          that.setData({
            curlatitude: latitude,
            curlongitude: longitude
          })
        }
      })
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