import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import BinList from './components/homepage/binList/binList';



  export default (
        <Switch>
	        <Route exact path="/" component={ HomePage }/>
              <Route path="/binList/:id" component={ BinList }/>
              
        </Switch>
  )

