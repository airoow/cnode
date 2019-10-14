import request from '@/utils/request'

//用户详情
export function getUserDetails(loginname) {
    return request({
      url: `/user/${loginname}`,
      method: 'get'
    })
}

//验证 accessToken 的正确性(登陆)
export function testAccesstoken(data) {
    return request({
        url: '/accesstoken',
        method: 'post',
        data
    })
}
