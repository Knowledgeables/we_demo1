// pages/lifecycle/lifecycle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lifecycle: []
  },
  getData()
  {
    return this.data.lifecycle;
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("生命周期-生命周期函数--监听页面加载-onLoad");
    this.data.lifecycle.push("生命周期-生命周期函数--监听页面加载-onLoad");
    this.setData({ lifecycle: this.getData() })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("生命周期-生命周期函数--监听页面初次渲染完成-onReady");
    this.data.lifecycle.push("生命周期-生命周期函数--监听页面初次渲染完成-onReady");
    this.setData({ lifecycle: this.getData() })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("生命周期-生命周期函数--监听页面显示-onShow");
    this.data.lifecycle.push("生命周期-生命周期函数--监听页面显示-onShow");
    this.setData({ lifecycle: this.getData()})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("生命周期-生命周期函数--监听页面隐藏-onHide");
    this.data.lifecycle.push("生命周期-生命周期函数--监听页面隐藏-onHide");
    this.setData({ lifecycle: this.getData() })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("生命周期-生命周期函数--监听页面卸载-onUnload");
    this.data.lifecycle.push("生命周期-生命周期函数--监听页面卸载-onUnload");
    this.setData({ lifecycle: this.getData() })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("生命周期-页面相关事件处理函数--监听用户下拉动作-onPullDownRefresh");
    this.data.lifecycle.push("生命周期-页面相关事件处理函数--监听用户下拉动作-onPullDownRefresh");
    this.setData({ lifecycle: this.getData() })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("生命周期-页面上拉触底事件的处理函数-onReachBottom");
    this.data.lifecycle.push("生命周期-页面上拉触底事件的处理函数-onReachBottom");
    this.setData({ lifecycle: this.getData() })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("生命周期-用户点击右上角分享-onShareAppMessage");
    this.data.lifecycle.push("生命周期-用户点击右上角分享-onShareAppMessage");
    this.setData({ lifecycle: this.getData() })
  }
})