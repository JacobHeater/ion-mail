import IonRoute from './ion-route';
import * as React from 'react';

class IonRouter {
  constructor() {
    window.addEventListener('hashchange', e => {
      // TODO:
      // parse path from hash
      // this._pageViewer.loadComponent();
    });
  }

  private _routes: {[key: string]: React.Component} = {};
  private _pageViewer: React.Component = null;

  setPageViewer(pageViewer: React.Component) {
    // TODO: pageViewer should be actual page viewer type.
    this._pageViewer = pageViewer;
  }

  mapRoutes(routes: IonRoute[]) {
    for (let r of routes) {
      this._routes[r.path] = r.component;
    }
  }
}

// Singleton
export default new IonRouter();