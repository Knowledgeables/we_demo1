// pages/firstpage/firstpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  text:"你好陈滨",
  btnText:"这是按钮的内容",
  show:false,
  showbtn:false,
  news: [
    { name: "陈滨", age: "30", content: "你好陈滨" },
     { name: "陈函", age: "31", content: "你好陈涵" }, 
     { name: "梦成", age: "18", content: "mynameis 里梦城" }
     ]
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
  btnClick: function () {
    this.setData({ btnText:"你好吗"});

  },
    btn2show: function () {
      var isshow = this.data.showbtn;
     this.setData({
       showbtn: !isshow
     });

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }

})