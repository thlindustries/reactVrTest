import { Switch, Route } from 'react-router-dom';

import { Header } from 'components/Header';

// Public pages
import { Landing } from 'pages/Landing';
import { Product1 } from 'pages/Product1';
import { Product2 } from 'pages/Product2';
import { Product3 } from 'pages/Product3';

export const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/product1" exact component={Product1} />
        <Route path="/product2" exact component={Product2} />
        <Route path="/product3" exact component={Product3} />
      </Switch>
    </>
  );
};
