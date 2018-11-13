// pages/musicRanking/musicRanking.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      appid:77808,
      showapi_sign:"b8cacdac8d9f4e7cad4fd0a51cd4848a",
      show:true,
      list:[],
  },
// 点击排行榜
  click:function(e){
      console.log(e)
    wx.showLoading({
      title:"加载中"
    })
     wx.navigateTo({
       url:
         "../musicInfo/musicInfo?id="+ e.currentTarget.dataset.id+
         "&title=" +
         e.currentTarget.dataset.title,
       success: result => {
         wx.hideLoading();
       },
       fail: () => {},
       complete: () => {}
     });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title:"加载中",
      mask: true,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    let data = this.data.list
    // for(let i in data){
      let date = parseInt(new Date().getTime())
      setTimeout(()=>{
        wx.request({
          url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_='+date,
          header: {'content-type':'application/json'},
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: (e)=>{
            console.log(e)
            let toplist = e.data.data.topList
           
            let fun =()=>{
              let array = []
              for(let j in toplist){
                let obj = {}
                obj.num = toplist[j].id
                obj.title = toplist[j].topTitle
                obj.url = toplist[j].picUrl
                obj.info = toplist[j].songList
                array.push(obj)
              }
              return array
            }
        //  console.log(fun())
              this.setData({
                show:false,
                list:fun()
              })
              wx.hideLoading();


          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },400)
      
      
    // }
    
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