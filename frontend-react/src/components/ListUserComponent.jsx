import React,{Component} from 'react';
import DataService from '../service/DataService'
import {Table} from 'react-bootstrap'
class ListUserComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            users:[],
            message:null
        }
        this.refreshUsers = this.refreshUsers.bind(this);
        this.addUserClick= this.addUserClick.bind(this);
        
    }

    componentDidMount(){
        this.refreshUsers();
    }

    refreshUsers(){

        DataService.retriveAllUsers()
        .then(response => {
            this.setState({users:response.data});
            console.log(this.state.users);
        });
    }

    addUserClick(){
        
        this.props.history.push('/addUser');
    }
    render(){
        return(
            <div className="container">
                <h3>All User</h3>
                <div className="container">
              
                    <Table striped bordered hover   size="sm" className="Table" >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    this.state.users.map(
                                        user => <tr key={user.id}> 
                                            <td> {user.id}  </td>
                                            <td>{user.name} </td>
                                            <td>{user.email} </td>

                                        </tr>
                                    )
                                }
                            
                        </tbody>

                    </Table>
                </div>
                <div className="continer">
                    <button name="add" type="submit" className="btn btn-secondary" onClick={this.addUserClick}>Add</button>
                </div>
            </div>
        );
    }
      
}
export default ListUserComponent;