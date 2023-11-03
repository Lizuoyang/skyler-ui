import request from "/@/utils/request"

export function fetchList(query?: Object) {
  return request({
    url: '/admin/tenant/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj?: Object) {
  return request({
    url: '/admin/tenant',
    method: 'post',
    data: obj
  })
}

export function getObj(id?: string) {
  return request({
    url: '/admin/tenant/' + id,
    method: 'get'
  })
}

export function delObjs(ids?: Object) {
  return request({
    url: '/admin/tenant',
    method: 'delete',
    data: ids
  })
}

export function putObj(obj?: Object) {
  return request({
    url: '/admin/tenant',
    method: 'put',
    data: obj
  })
}

// 使用租户名，获得租户编号
export const getTenantIdByName = (name: string) => {
  return request({
    url: '/admin/tenant/get-id-by-name?name=' + name,
    method: 'get'
  })
}
