import React,{Component} from 'react';
import DataService from '../service/DataService'

class ListUserComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            users:[],
            message:null
        }
        this.refreshUsers = this.refreshUsers.bind(this);
        
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

    render(){
        return(
            <div className="container">
                <h3>All User</h3>
                <div className="container">
                    <table className="table">
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

                    </table>
                </div>
            </div>
        );
    }
      
}
export default ListUserComponent;