import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenuNav extends React.Component {
  render() {
    return (
        <Menu className="topmenu" borderless inverted color={'orange'}>
          <Menu.Item active>HOME</Menu.Item>
          <Menu.Item>BUY</Menu.Item>
          <Menu.Item>LEARN</Menu.Item>
          <Menu.Item>INCOMING STOCK</Menu.Item>
          <Menu.Item>JUST ARRIVED</Menu.Item>
        </Menu>
    );
  }
}
