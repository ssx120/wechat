// pages/tset/test.js
// 创建音频
var innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.src = ""
innerAudioContext.autoplay = true
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 预览图片
    imgurl:["https://img02.sogoucdn.com/app/a/100520076/59db7bf1b80bc1346e5ec18c93a7cb6b",
    "https://img03.sogoucdn.com/app/a/100520076/70d8d15e5117ef9e4fc2534abd3b42eb",
    "https://img02.sogoucdn.com/app/a/100520076/c9ad96bc47742f5092374651dec8ce29"
  ],
    // 上传图片
    imgSrc:"",
    region: "",
    date: null,
    time: null,
    value: 0,
    content: "测试",
    falg: false,
    num1: 5,
    num2: 2,
    user: [
      {
        name: "cool",
        age: 18
      },
      {
        name: "jeck",
        age: 30
      },
      {
        name: "mary",
        age: 50
      }
    ],
    array: [1, 2, 3, 4, 5, 6],
    arr: ["aa", "bb", "cc"]
  },
  test1: function(e) {
    // 改变data方法
    this.setData({
      content: "test测试"
    });
    console.log(e);
  },
  test: function(e) {
    return "我是返回的";
  },
  // switch事件
  switch: function(e) {
    console.log(e);
  },
  //  radio
  sex: function(e) {
    console.log(e);
  },
  // 点击提交
  submit: function(e) {
    console.log(e);
  },
  // picker
  picker: function(e) {
    console.log(e);
    let value = e.detail.value;
    this.setData({
      value: value
    });
  },
  // 时间选择器
  loop: function(e) {
    let value = e.detail.value;
    this.setData({
      time: value
    });
  },
  // 日期选择器
  date: function(e) {
    console.log(e);
    this.setData({
      date: e.detail.value
    });
  },
  // 城市选择器
  city: function(e) {
   
    let city = e.detail.value.join();
    console.log(city);
    this.setData({
      region : city.replace(/,/g,"--")
    })
  },
  // 点击跳转
  url:function(){
   wx.navigateTo({
      url: '../index/index?id=123',
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    
  },
  // loading 加载
  loading:function(){
    // 默认的
      //   wx.showLoading({
      //     title:"加载中"
      //   });
      //   setTimeout(function(){
      //     wx.hideLoading();
      // },2000)
      // 自定义
      // wx.showToast({
      //   title: '加载中',
      //   icon:"loading",
      //   image:"../../img/me.jpg",
      //   // 延迟显示时间
      //   duration:5000
      // })
      // setTimeout(()=>{
      //   wx.hideToast()
      // },1000)
     wx.showModal({
        title: '提示',
        content: '你好吗？',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }else if(result.cancel){
            this.loading();
          }
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    
  },
  // 底部弹窗函数
  buttom:()=>{
      wx.showActionSheet({
        itemList: ["分享微博","分享朋友圈","分享qq"],
        itemColor: '#0404FF',
        success: (result)=>{
          console.log(result)
        },
        fail: ()=>{},
        complete: ()=>{}
      });
  },
  // 网络请求
  request:()=>{
    let appid = 77689;
    let secred = "6e6ad2cd03d54d5294343a8fe80d348c";
      wx.request({
        "url":"https://route.showapi.com/852-2",
        "data":{
            "showapi_appid":appid,
            "showapi_sign":secred,
            "type":4001,
            "page":1
        },
        success:(e)=>{
            console.log(e)
        },
      })
  },
  // 选择图片
  selectImg:function(){
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (e)=>{
        console.log(e.tempFilePaths)
        this.setData({
          imgSrc:e.tempFilePaths[0]
        })  
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  // 预览图片
  yulan:function(){
    wx.previewImage({
      current: this.data.imgurl[2],
      urls: this.data.imgurl,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  // 获取图片信息
  getimginfo:function(){
      wx.getImageInfo({
        src:"../../img/me.jpg",
        success:(e)=>{
            console.log(e)
        }
      })
  },
  // 获取授权
  getseting:function(){
    wx.getSetting({
      success:(e)=>{
        console.log(e)
      }
    });
    // 打开设置信息
    wx.openSetting({
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  // 授权弹窗
  alert:function(){
    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
