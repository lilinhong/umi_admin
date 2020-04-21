import request from '@/utils/request';
import moment from 'moment'

export async function queryCodeSrcpost(params) {
    return request('/getCode', {
      method: 'POST',
      data: params,
    });
}

export async function queryCodeSrc() {
    return request(`/getCode?t=${moment().valueOf()}`);
}