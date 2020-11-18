import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  const gerenateClassName = createGenerateClassName({
    productionPrefix: 'ma'
  });

  return (
    <div>
      <StylesProvider generateClassName={gerenateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
