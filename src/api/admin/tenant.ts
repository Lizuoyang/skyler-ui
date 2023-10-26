import request from "/@/utils/request"

export function fetchList(query?: Object) {
  return request({
    url: '/admin/teant/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj?: Object) {
  return request({
    url: '/admin/teant',
    method: 'post',
    data: obj
  })
}

export function getObj(id?: string) {
  return request({
    url: '/admin/teant/' + id,
    method: 'get'
  })
}

export function delObjs(ids?: Object) {
  return request({
    url: '/admin/teant',
    method: 'delete',
    data: ids
  })
}

export function putObj(obj?: Object) {
  return request({
    url: '/admin/teant',
    method: 'put',
    data: obj
  })
}

