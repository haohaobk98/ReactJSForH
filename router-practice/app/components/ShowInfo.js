import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import axios from 'axios';
class ShowInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>hello {this.props.username}</h2>
                <a href="" onClick={this.logout.bind(this)}> Logout</a>
            </div>
        )
    }
    logout(e){
        e.preventDefault();
        var {dispatch} = this.props;
        axios.get('/logout')
        .then(res=>{
            dispatch({type:'LOG_OUT'});
        })
        .catch(err=>console.log(err))
    }
}

module.exports = connect(function(state){
    return {username: state.username}
})(ShowInfo);