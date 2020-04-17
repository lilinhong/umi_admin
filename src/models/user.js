// import {
    
//   } from '@/services/api';
  import _ from 'lodash';
  import { notification } from 'antd';
  
  //导向页
  export default {
    namespace: 'user',
    state: {
    },
  
    effects: {
      // 用于保存要发送后端的数据
      *getSaveData({ payload, callback }, { select, put, call }) {
        console.log('payload',payload)
        let { relatedFieldGroup, data } = payload;
        let sendGuideData = yield select(({ guidePage }) => guidePage.sendGuideData);
        sendGuideData[relatedFieldGroup] = data;
        yield put({
          type: 'save',
          payload: {
            sendGuideData,
          },
        });
      },
    },
  
    reducers: {
      save(state, action) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  };