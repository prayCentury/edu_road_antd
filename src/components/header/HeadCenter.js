import React, {PureComponent} from 'react';
import {Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';
import Logo from '../../assets/logo.svg';
// 引入子菜单组件
const SubMenu = Menu.SubMenu;


class HeadCenter extends PureComponent {
  render() {
    return (
      <div style={{maxWidth: 1067, display:'flex',flex:4}}>
        <Menu style={{lineHeight: '64px'}} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/products/products">
              <Icon type="pie-chart"/>
              <span>产品</span></Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="dashboard"/><span>用户</span></span>}
          >
            <Menu.Item key="2"><Link to="/user/user">分析页</Link></Menu.Item>
            <Menu.Item key="3">监控页</Menu.Item>
            <Menu.Item key="4">工作台</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );

  }
}

export default HeadCenter;
