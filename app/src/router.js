import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import BinList from './components/homepage/binList/binList';
import InventoryDetail from './components/homepage/binList/inventory/inventory';
import AddToInventory from './components/homepage/binList/addToInventory/addToInventory';


  export default (
        <Switch>
	        <Route exact path="/" component={ HomePage }/>
              <Route path="/binList/:id" component={ BinList }/>
              <Route path="/inventory/:id" component={ InventoryDetail }/>
              <Route path="/addToInventory" component={ AddToInventory }/>
              
        </Switch>
  )

