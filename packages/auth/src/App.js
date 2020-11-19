import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

const gerenateClassName = createGenerateClassName({
  productionPrefix: 'au'
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={gerenateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
