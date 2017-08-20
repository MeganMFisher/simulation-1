import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import BinList from './components/binList/binList';
import Inventory from './components/inventory/inventory';



  export default (
        <Switch>
	          <Route exact path="/" component={ HomePage }/>
              <Route path="/binList" component={ BinList }/>
              <Route path='/inventory' component={ Inventory }/>
        </Switch>
  )

