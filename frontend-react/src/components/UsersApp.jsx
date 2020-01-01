import React,{Component} from 'react';
import ListUserComponent from './ListUserComponent';
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom';
import addUserComponent from './addUserComponent'

class UsersApp extends Component{

    render(){

        return (
            <Router>  
                <>
                    <h1> Users Application</h1>
                    <Switch>  
                        <Route path="/" exact component={ListUserComponent} />
                        <Route path="/addUser" exact component={addUserComponent} />
                    </Switch>
                </>
            </Router>
        );

    }
}
export default UsersApp;