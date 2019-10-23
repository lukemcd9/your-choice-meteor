import React from 'react';
import { Icon, Image, Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu className="topmenu" borderless container>
          <Menu.Item header>
            <Image src="https://mechanicalkeyboards.com/images/mk_logo.png" width="200px"/>
            THE ULTIMATE MECHANICAL KEYBOARD CATALOG
          </Menu.Item>
          <Menu.Item position="right" className="orange-text">
            <Icon name="search"/>| Advanced Keyboard Search</Menu.Item>
        </Menu>
    );
  }
}
