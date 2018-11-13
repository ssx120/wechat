 var Audio = wx.createInnerAudioContext();
  Audio.autoplay = true;
// pages/musicInfo/musicInfo.js
    let date = new Date();
    let month =  date.getMonth()+1
    let ymd = date.getFullYear() + " / " + month + " / " + date.getDate() 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    appid: 77808,
    showapi_sign: "b8cacdac8d9f4e7cad4fd0a51cd4848a",
    title: "",
    date: ymd,
    titleIMG: "",
    bag: "",
    toplist: null,
    musicurl: null,
    plays: true,
    playlist: false,
    musicName: "",
    colorstyle: null,
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    console.log(e);
    wx.request({
      url: "https://route.showapi.com/213-4",
      data: {
        showapi_appid: this.data.appid,
        showapi_sign: this.data.showapi_sign,
        topid: e.id
      },
      header: { "content-type": "application/json" },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: es => {
        let data = es.data.showapi_res_body.pagebean;
        // console.log(es.data);
        this.setData({
          title: e.title,
          titleIMG: data.songlist[0].albumpic_small,
          bag: data.songlist[0].albumpic_big,
          toplist: data.songlist,
          musicurl: data.songlist[0].url,
          musicName: data.songlist[0].songname
        });
      },
      fail: () => {},
      complete: () => {}
    });
    // 监听音频播放结束事件
    Audio.onEnded(() => {
      let data = this.data
        this.setData({
          index: data.index + 1,
          colorstyle: data.toplist[data.index + 1].songid
        });
        Audio.src = data.toplist[data.index + 1].url;

    });
  },

  // 点击播放
  play: function() {
    console.log(this.data.musicurl);
    Audio.src = this.data.musicurl;
    this.setData({
      plays: false,
      playlist: true,
      colorstyle: this.data.toplist[0].songid
    });
  },
  // 点击播放列表
  clickplay: function(e) {
    console.log(e);
    let data = e.currentTarget.dataset;
    this.setData({
      colorstyle: data.content.songid,
      musicName: data.content.songname,
      plays: false,
      playlist: true,
      index: data.index
    });
    Audio.src = data.url;
  },
  // 点击播放暂停
  pause: function() {
    Audio.pause();
    this.setData({ playlist: false });
  },
  // 点击暂停播放
  bofang: function() {
    Audio.play();
    this.setData({ playlist: true });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});