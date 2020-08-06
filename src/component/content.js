import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Employees from './employees'

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 

            <Switch>
                <Route path='/' exact component={Employees}></Route>
            </Switch>
         );
    }
}
 
export default Content;