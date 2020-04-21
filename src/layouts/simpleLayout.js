import React from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

export default class SimpleLayout extends React.Component {
    render () {
        return (
            <Layout>
                <Content>
                    {this.props.children}
                </Content>
            </Layout>
        )
    }
}