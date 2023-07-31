Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
        title: '课表',
        icon: '/asset/imgs/course.png',
        path: '/pages/course/course'
      },
      {
        title: '成绩',
        icon: '/asset/imgs/score.png',
        path: '/pages/score/score'
      },
      {
        title: '考勤',
        icon: '/asset/imgs/attendance.png',
        path: '/pages/attendance/attendance'
      },
      {
        title: '校历',
        icon: '/asset/imgs/calendar.png',
        path: '/pages/calendar/calendar'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  nav(e) {
    const index = e.currentTarget.dataset.index
    const path = this.data.navList[index].path
    wx.navigateTo({
      url: path,
    })
  }
})