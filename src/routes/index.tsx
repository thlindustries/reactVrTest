import { Switch, Route } from 'react-router-dom';

// import { Header } from 'components/Header';

// Public pages
import { Landing } from 'pages/Landing';
import { Product1 } from 'pages/Products/Product1';
import { Product2 } from 'pages/Products/Product2';
import { Product3 } from 'pages/Products/Product3';

export const Routes = () => {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/bruggerman" exact component={Product1} />
        <Route path="/saf-instant" exact component={Product2} />
        <Route path="/fermipan" exact component={Product3} />
      </Switch>
    </>
  );
};
