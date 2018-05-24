import * as React from 'react';

import IonMenu from './menu/menu';

class IonApp extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="ion-app-container">
        <IonMenu />
      </div>
    );
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default IonApp;
