import React from 'react'
import styles from './Index.less'
import { Menu, Dropdown } from 'antd';
import { UserOutlined,SettingOutlined,LogoutOutlined } from '@ant-design/icons'
import { history } from 'umi'

export default class Header extends React.Component{
    onGoLogin = () => {
        history.push('/user/login')
    }
    render () {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <UserOutlined /> 个人中心
                </Menu.Item>
                <Menu.Item key="1">
                    <SettingOutlined /> 个人设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" onClick={this.onGoLogin}>
                    <LogoutOutlined />退出登录
                </Menu.Item>
            </Menu>
        )
        return (
            <div className={styles.headerBox}>
                <Dropdown overlay={menu} >
                    <div className="ant-dropdown-link" style={{width: '70px',cursor: 'pointer'}} onClick={e => e.preventDefault()}>
                        <UserOutlined /> admin
                    </div>
                </Dropdown>
            </div>
        )
    }
}