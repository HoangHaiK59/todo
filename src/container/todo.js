import React from 'react';
import { NavBar } from '../components/navbar/navbar';
import { Switch, Route } from 'react-router-dom';
import { MyDay } from '../components/day/day';


export const TodoContainer = () => {
    return <div className="root-container">
        <div className="navbar-wrap">
            <NavBar />
        </div>
        <div className="main">
           <Switch>
                <Route path="/myday" component={MyDay}/>
           </Switch>
        </div>
    </div>
}