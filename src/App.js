import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './containers/Main/Main';
import {Header} from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import { Table } from '@material-ui/core';

const routes = (
  <Switch>
    <Route path="/perso-page" component={Table} />
    <Route path="/" exact component={Main} />
    <Redirect to="/" />
  </Switch>
)

export default function App(props) {
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  )
}