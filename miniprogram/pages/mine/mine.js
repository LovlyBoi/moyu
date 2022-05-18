Page({
  data: {
    itemList: ['不是所有的按钮都有用捏', '总有一些按钮庸庸碌碌的过完一生，却没有任何成就', '关于这个按钮没什么用但是我就想放在这这件事', '还想写一个但想不出来了'],
  },
  btn() {
    // Toast(this.data.itemList[Math.floor(Math.random()*this.data.itemList.length)])
    wx.showToast({
      title: this.data.itemList[Math.floor(Math.random()*this.data.itemList.length)],
      icon: 'none',
      duration: 2000//持续的时间
    })
  }
  
})
