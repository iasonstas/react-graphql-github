import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'template/layouts/main/Main';
import WithLayoutRoute from './WithLayoutRoute';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
// Handling of the routing with a Layout That adds Head + Nav + Main  and not found - 404 page.

export default function Routes() {
  return (
    <Switch>
      <WithLayoutRoute component={Home} head={'home'} exact layout={MainLayout} path="/" />
      <WithLayoutRoute component={Home} head={'issues'} exact layout={MainLayout} path="/issues" />
      <WithLayoutRoute component={Home} head={'pull-requests'} exact layout={MainLayout} path="/pull-requests" />
      <WithLayoutRoute component={Home} head={'forks'} exact layout={MainLayout} path="/forks" />
      <WithLayoutRoute component={Home} head={'languages'} exact layout={MainLayout} path="/languages" />
      <Route component={NotFound} path="/not-found" />
      <Redirect to="/not-found" />
    </Switch>
  );
}
