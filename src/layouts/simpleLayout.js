import React from 'react'
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

export default class SimpleLayout extends React.Component {
    render () {
        console.log('this.props', this.props)
        return (
            <div>
                这是登录页·
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                    >
                    {this.props.children}
                </Content>
            </div>
        )
    }
}