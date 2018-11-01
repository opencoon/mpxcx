//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardobj :{
      company: {
        name: "企泰信息科技",
        imagepath: "qticon.ico"
      },
      empid: "1",
      empname: "梁辉",
      emppost: "开发人员",
      mobnum: "13800000000",
      wxnum: "webqt",
      email: "try@entertry.com",
      telphone: "020-88888888",
      address: "广州市越秀区中桥大厦18楼D/F",
      imgpath: "1b63128bf3cc49199d20abba1b30e401.jpeg",
      intro: "大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；大家好，我是某某某，企泰科技开发人员；",
      perphoto : "",
      dzamount: 1,
      scanlist: [''],
    },
    cardinfo: true,
    isdz: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.setEnableDebug({
      enableDebug: true,
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //切换显示隐藏名片信息
  changecdsta: function(){
    this.setData({
      cardinfo: !this.data.cardinfo
    })
  },

  //拨打电话
  bindcallpop: e =>{
    console.log(e)
    let temp = {
      phoneNumber : e.target.dataset.num
    }
    wx.makePhoneCall(temp);
  },

  //复制贴
  bindClickboardData: e =>{
    let temp = {
      data : e.target.dataset.cont
    }
    wx.setClipboardData(temp)
  },

  //保存到通讯录
  bindAddPhoneContact: function(){
    let temp = {
      firstName: this.data.cardobj.empname,
      mobilePhoneNumber: this.data.cardobj.mobnum,
      weChatNumber: this.data.cardobj.wxnum,
      email: this.data.cardobj.email,
      title: this.data.cardobj.emppost,
      organization: this.data.cardobj.company.name,
      addressStreet: this.data.cardobj.address,
      hostNumber : this.data.cardobj.telphone,
    }
    wx.addPhoneContact(temp)
  },

  //是否点赞按钮
  bindChangedz: function(){
    this.setData({
      isdz : !this.data.isdz
    })
  },

  //切换到卡片列表
  bindtomyCards: function(){
    wx.navigateTo({
      url: "../cards/cards" 
    })
  },

  bindpreview: function(){
    wx.previewImage({
      urls: ['https://entertry.com/upload/20181029163005.jpg'],
    })
  }
})
