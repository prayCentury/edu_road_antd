import React, { PureComponent } from 'react';
import { Layout, Menu, Icon  } from 'antd';
import HeadView from '../components/header/HeadView';
// import TopNavHeader from '@/components/TopNavHeader';

const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends PureComponent {
  render(){
    return(
      <div>
        <Sider/>
        <Layout>
          <HeadView/>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
}

export default BasicLayout;
