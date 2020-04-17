import React from 'react'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import ComHeader from '@/components/ComHeader'
import ComMenu from '@/components/ComMenu'
import styles from './index.less'

const { Header, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    let { collapsed } = this.state
    return (
      <div className={styles.basicLayoutStyle}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">Umi {!collapsed ? <span>_Admin</span> : null} </div>
            <ComMenu />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <div style={{display: 'inline-block',width: 'calc(100% - 66px)'}}>
                <ComHeader />
              </div>
            </Header>
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
          </Layout>
        </Layout>
      </div>
    );
  }
}