import * as React from 'react';

import { slide as Menu } from 'react-burger-menu';

class IonMenu extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  showSettings = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ion-menu">
        <Menu>
          <a id="home" className="menu-item" href="#/">Home</a>
          <a id="about" className="menu-item" href="#/about">About</a>
          <a id="contact" className="menu-item" href="#/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="#/settings">Settings</a>
        </Menu>
      </div>
    );
  }
}

export default IonMenu;