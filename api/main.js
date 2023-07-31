import createRequest from '../utils/request'

//登录
export function loginRequest(data) {
  return createRequest({
    url: '/login',
    method: 'POST',
    data,
    needLogin: false
  })
}

//成绩查询
export function getScoreListRequest(data) {
  return createRequest({
    url: '/scores',
    method: 'GET',
    data,
  })
}

export function getRawScoreListRequest(data) {
  return createRequest({
    url: '/raw-scores',
    method: 'GET',
    data,
  })
}