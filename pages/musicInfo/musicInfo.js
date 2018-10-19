// pages/musicInfo/musicInfo.js
    let date = new Date();
    let month =  date.getMonth()+1
    let ymd = date.getFullYear() + " / " + month + " / " + date.getDate() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:"",
      date:ymd,
      titleIMG:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    let data =JSON.parse(decodeURIComponent(e.data))
    console.log(data)
    console.log(e)
    this.setData({
      title:e.title,
      titleIMG:data.showapi_res_body.pagebean.songlist[0].albumpic_big
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