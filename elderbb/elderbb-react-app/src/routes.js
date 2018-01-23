import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'

import Home from './components/HomePage/HomePage'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Nope from './Nope'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/cart' component={Cart}/>
        <Route component={Nope} />
    </Switch>  
)