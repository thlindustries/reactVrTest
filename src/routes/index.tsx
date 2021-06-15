import { Switch, Route } from 'react-router-dom';

// Public pages
import { Landing } from 'pages/Landing';

import { BrugeSalgado } from 'pages/Products/BrugeSalgado';
import { BrugeDoce } from 'pages/Products/BrugeDoce';

import { SafDoce } from 'pages/Products/SafDoce';
import { SafSalgado } from 'pages/Products/SafSalgado';

import { FermiDoce } from 'pages/Products/FermiDoce';
import { FermiSalgado } from 'pages/Products/FermiSalgado';

export const Routes = () => {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/bruggeman-doce" exact component={BrugeDoce} />
        <Route path="/bruggeman-sal" exact component={BrugeSalgado} />
        <Route path="/saf-instant-doce" exact component={SafDoce} />
        <Route path="/saf-instant-sal" exact component={SafSalgado} />
        <Route path="/fermipan-doce" exact component={FermiDoce} />
        <Route path="/fermipan-sal" exact component={FermiSalgado} />
      </Switch>
    </>
  );
};
