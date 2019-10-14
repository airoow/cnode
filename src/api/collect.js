import request from '@/utils/request'

//收藏主题
export function collectTopic(data) {
    return request({
      url: '/topic_collect/collect',
      method: 'post',
      data
    })
}


//取消主题
export function decollectTopic(data) {
    return request({
      url: '/topic_collect/de_collect',
      method: 'post',
      data
    })
}


//用户所收藏的主题
export function getUserCollections(loginname) {
    return request({
      url: '/topic_collect',
      method: 'get',
      params: { loginname }
    })
}