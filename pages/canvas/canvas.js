//获取应用实例
const app = getApp()
// pages/canvas/canvas.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      show:true,
      width:"",
      height:"",
      imgurl:"../../img/bg.jpg",
      dataurl:"../../img/title.jpg",
      username:null,
      userimg:null
  },
// 点击生成海报
  send:function(e){
    this.setData({
      show:false,

    })
    let width = wx.getSystemInfoSync().windowWidth;
    let height = wx.getSystemInfoSync().windowHeight;
    var cvsCtx = wx.createCanvasContext('canvas');
    cvsCtx.drawImage(this.data.imgurl, 0, 0, width*.8 , height*.7);
    cvsCtx.drawImage(this.data.dataurl,width*.8*.4, height*.7*.25, width*.8*.2 , height*.7*.2);
    // cvsCtx.draw();
    cvsCtx.setTextAlign('center');
    cvsCtx.setFillStyle('red');
    cvsCtx.setFontSize(20);
    cvsCtx.fillText('立省50元',width*.8*.5 ,height*.7*.2 );
    cvsCtx.setFontSize(12);
    cvsCtx.setFillStyle('green');
    cvsCtx.fillText(this.data.username,width*.8*.45,height*.7*.62);
    cvsCtx.save();
    let r=15;
    let d = r*2;
    let cx = 80;
    let cy = width*.65;
    cvsCtx.arc(cx+r, cy+r, r, 0, 2 * Math.PI);
    cvsCtx.clip();
    cvsCtx.drawImage(this.data.userimg, cx, cy, d, d);
    cvsCtx.restore();

    // cvsCtx.fill();
    cvsCtx.draw();
  },
  // 点击保存图片
  download:function(){
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width:wx.getSystemInfoSync().windowWidth*.8 ,
      height:wx.getSystemInfoSync().windowHeight*.7 ,
      // destWidth:200 ,
      // destHeight: 300,
      canvasId:"canvas" ,
      fileType: 'jpg',
      quality: 1.0,
      success: (result)=>{
        console.log(result.tempFilePath)
        wx.saveImageToPhotosAlbum({
          filePath:result.tempFilePath ,
          success: (result)=>{
            
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      fail: ()=>{},
      complete: ()=>{}
    }, this);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        username: app.globalData.userInfo.nickName,
        userimg: app.globalData.userInfo.avatarUrl,
        // userInfo: app.globalData.userInfo,
        // hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          username: res.userInfo.nickName,
          userimg: res.userInfo.avatarUrl,
          // userInfo: res.userInfo,
          // hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            username: res.userInfo.nickName,
            userimg: res.userInfo.avatarUrl,
            // userInfo: res.userInfo,
            // hasUserInfo: true
          })
        }
      })
    }

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