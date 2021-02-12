import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'
import Home from './core/Home';
import AddDonor  from './core/AddDonor'


const Routes = () => {
    return(
        <HashRouter>
            <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/addDonor" exact component = {AddDonor} />
            </Switch>
        </HashRouter>
    )
} 

export default Routes;