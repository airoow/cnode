import request from '@/utils/request'

//主题首页
export function fetchList(query) {
    return request({
      url: '/topics',
      method: 'get',
      params: query
    })
}


//主题详情
export function detail(query, id) {
    return request({
        url: `/topic/${id}`,
        method: 'get',
        params: query
    })
}