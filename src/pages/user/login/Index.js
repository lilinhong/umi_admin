import React from 'react'
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { connect } from 'dva'
import moment from 'moment'
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import styles from './Index.less'

@connect(({user})=>({
  user
}))
export default class NormalLoginForm extends React.Component {
  componentDidMount = () => {
    this.props.dispatch({
      type:'user/getCodeSrc'
    })
  }
  handleRefresh = () => {
    this.props.dispatch({
      type:'user/save',
      payloas: {
        codeSrc: `/pf/v1/getCode?t=${Date.now()}`
      }
    })
	}
  render () {
    const { user:{ codeSrc }} = this.props
    console.log('codeSrc', codeSrc)
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
    return (
      <div className={styles.loginBox}>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h2 className={styles.formTitle}>账号登录</h2>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入你的账号!',
              },
            ]}
          >
            <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入你的密码!',
              },
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}
          >
            <Input
              size="large"
              addonAfter={
								<div>
									{
										codeSrc ?
											<img alt="验证码" style={{width: 80, height: 38, cursor: 'pointer'}} src={codeSrc} onClick={this.handleRefresh} /> :
											<span><LoadingOutlined/></span>
									}
								</div>
							}
              placeholder="验证码"
            />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className={styles.formButton}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
      
    );
  }
};
