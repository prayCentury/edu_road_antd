import React, {PureComponent} from 'react';
import {Menu, Icon} from 'antd';
import Link from 'umi/link';
import logo from '../../assets/logo.svg'
import styles from './logo.less'

export default class HeadLogo extends PureComponent{
  render(){
    return(
      <div className={styles.logo} key="logo" id="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>Edu Road</h1>
        </Link>
      </div>
    )
  }
}
