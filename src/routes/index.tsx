import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Maintenance from '../pages/Maintenance';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Maintenance} />
  </Switch>
);

export default Routes;
