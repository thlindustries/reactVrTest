import { Switch, Route } from 'react-router-dom';

import { Header } from 'components/Header';

// Public pages
import { Landing } from 'pages/Landing';

export const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </>
  );
};
