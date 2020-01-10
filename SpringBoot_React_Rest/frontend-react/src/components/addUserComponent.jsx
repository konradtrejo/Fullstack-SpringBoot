import React,{Component} from 'react';
import DataService from '../service/DataService';
class addUserComponent extends Component{
   
    constructor(){
        super();
        this.state={
            name:'',
            email:''

        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        const data={
            
            email: this.state.email,
            name:this.state.name
        };
        DataService.userSave(data)
        .then(
           response=> {
               console.log(response.data);
               const { from } = { from: { pathname: "/" } };
               this.props.history.push(from);
             }
            
        );
        e.preventDefault();
    }
    handleChange(e){
       const {name,value} = e.target;
        this.setState({[name]:value});
    }
    render(){
        return(
        <div className="container">
                
                  
                        <form className="col-lg-4 offset-lg-3" >
                            <div className="col justify-content-center">
                                <div className="form-group">
                                <label>Name</label>
                                <input name="name" placeholder="name" type="text" className="form-control" id="name" onChange={this.handleChange}></input>
                                </div>
                                <div className="form-group">
                                <label>Email</label>
                                <input name="email" placeholder="email" type="email" className="form-control" id="email" onChange={this.handleChange}></input>
                                </div>
                                <button type="submit" className="btn btn-dark" onClick={this.handleSubmit}>add User</button>
                            </div>
                    
                        </form>
                   
                </div>      
             
        
        );
    }
}

export default addUserComponent;