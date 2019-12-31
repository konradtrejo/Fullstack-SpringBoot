import React,{Component} from 'react';
import ListUserComponent from './ListUserComponent';
class UsersApp extends Component{

    render(){
        return (
            <>
            <h1> Users Application</h1>
            <ListUserComponent/>
            </>
        );

    }
}
export default UsersApp;