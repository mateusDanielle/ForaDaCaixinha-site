import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Maintenance from '../pages/Maintenance';
import Choose1 from '../pages/Choose1';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Maintenance} />
    <Route path="/choose1" exact component={Choose1} />
  </Switch>
);

export default Routes;
