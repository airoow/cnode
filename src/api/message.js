import request from '@/utils/request'
// 获取未读消息数
export function getMessageCount(query) {
    return request({
        url: '/message/count',
        method: 'get',
        params: query
    })
}
// 获取已读和未读消息
export function getMessages(query) {
    return request({
        url: '/messages',
        method: 'get',
        params: query
    })
}
// 标记全部已读
export function markAllMessages(data) {
    return request({
        url: '/message/mark_all',
        method: 'post',
        data
    })
}
// 标记单个消息为已读
export function markOneMessage(data) {
    return request({
        url: '/message/mark_one/:msg_id',
        method: 'post',
        data
    })
}