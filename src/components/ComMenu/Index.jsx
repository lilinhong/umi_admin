import React,{Fragment} from 'react'
import { Menu } from 'antd'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

export default class ComMenu extends React.Component {
    render () {
        return (
            <Fragment>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <UserOutlined />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <VideoCameraOutlined />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <UploadOutlined />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}

