import request from "/@/utils/request"

export function fetchList(query?: Object) {
  return request({
    url: '/admin/tenantPackge/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj?: Object) {
  return request({
    url: '/admin/tenantPackge',
    method: 'post',
    data: obj
  })
}

export function getObj(id?: string) {
  return request({
    url: '/admin/tenantPackge/' + id,
    method: 'get'
  })
}

export function delObjs(ids?: Object) {
  return request({
    url: '/admin/tenantPackge',
    method: 'delete',
    data: ids
  })
}

export function putObj(obj?: Object) {
  return request({
    url: '/admin/tenantPackge',
    method: 'put',
    data: obj
  })
}

export const fetchTenantPackageTree = (tenantPackageId: string) => {
  return request({
    url: '/admin/menu/tenantPackge/tree/' + tenantPackageId,
    method: 'get',
  });
};

