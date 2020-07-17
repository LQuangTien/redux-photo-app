import React, { Suspense } from 'react';
import { BrowserRouter, Link, Switch, Redirect, Route } from 'react-router-dom'
import './App.scss';
import NotFound from 'components/NotFound';
import Header from 'components/Header';
// import NotFound from './components/NotFound';
// import Header from './components/Header';

const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>} >
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from='/' to="/photos" />

            <Route path='/photos' component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
