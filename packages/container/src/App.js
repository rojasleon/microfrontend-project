import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
  });

  return (
    <BrowserRouter generateClassName={generateClassName}>
      <StylesProvider>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
