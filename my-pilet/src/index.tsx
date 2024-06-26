import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/page', Page);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page">Page</Link>);
  app.registerTile(() => <div>Welcome to My Pilet!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
