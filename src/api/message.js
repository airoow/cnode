import request from '@/utils/request'

export function getMessageCount(query) {
    return request({
        url: '/message/count',
        method: 'get',
        params: query
    })
}

export function getMessages(query) {
    return request({
        url: '/messages',
        method: 'get',
        params: query
    })
}

export function markAllMessages(data) {
    return request({
        url: '/message/mark_all',
        method: 'post',
        params: data
    })
}

export function markOneMessage(data) {
    return request({
        url: '/message/mark_one/:msg_id',
        method: 'post',
        params: data
    })
}