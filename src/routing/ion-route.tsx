import * as React from 'react';

class IonRoute {
  constructor(path: string, component: React.Component) {
    if (!path || !path.trim()) {
      throw new Error('Route path invalid!');
    }

    if (!component) {
      throw new Error('Route component invalid!');
    }

    this.path = path;
    this.component = component;
  }

  path: string;
  component: React.Component
}

export default IonRoute;
