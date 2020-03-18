import React from 'react';
import { NavBar } from '../components/navbar/navbar';
import { Switch, Route } from 'react-router-dom';
import { MyDay } from '../components/day/day';
import { Home } from '../components/home/home';
import Signin from '../components/signin';

export const TodoContainer = () => {
    return <div className="root-container">
        <div className="navbar-wrap">
            <NavBar />
        </div>
        <div className="main">
           <Switch>
                <Route path="/myday" component={MyDay}/>
                <Route path="/" exact render={() => <Home title="Home"/>}/>
                <Route exact path="/signin" render={() => <Signin />}/>
           </Switch>
        </div>
    </div>
}