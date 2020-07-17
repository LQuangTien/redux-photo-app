import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import NotFound from 'components/NotFound';
import MainPage from './pages/Main';
import AddEditPage from './pages/AddEdit';
// import NotFound from '../../components/NotFound';
// import MainPage from './pages/Main';
// import AddEditPage from './pages/AddEdit';

Photo.propTypes = {

};

function Photo(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;