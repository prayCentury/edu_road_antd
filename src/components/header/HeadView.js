import React, {PureComponent} from 'react';
import {Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';

const {Header} = Layout;
import HeadLogo from './HeadLogo';
import HeadRight from './HeadRight';
import HeadCenter from './HeadCenter';
// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class HeadView extends PureComponent {
  render() {
    return (
      <Header style={{textAlign: 'center', padding: '0', display: 'flex'}}>
        <HeadLogo />
        <HeadCenter />
        <HeadRight/>
      </Header>
    );

  }
}

export default HeadView;
