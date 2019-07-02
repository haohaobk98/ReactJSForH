import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import axios from "axios";
class SignIn extends React.Component{
    render(){
        return(
            <div className="row">
            <div className="small-8 medium-6 large-4 columns">
            <h2 className="text-center" >SignIn</h2>
                <form  onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="txtname" placeholder="Enter your nickname"/>
                    
                    <input type="text" ref="txtpass" placeholder="Enter your password"/>
                    
                    <button className="button expanded" type="submit">Login</button>
                </form>
                </div>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {txtname,txtpass} = this.refs;
       axios.post('/login',{username:txtname.value , password: txtpass.value})
       .then(res=>{
           if(res.data == "DANG NHAP THANH CONG")
        dispatch({type:'LOG_IN',username: txtname.value})
        else{
            // console.log("1");   
           
            dispatch({type:'SHOW_NOTI',txt:"sai tai khoan hoac mat khau"});
        }
       })
       .catch(err =>console.log(err))
    }
}

module.exports = connect()(SignIn);