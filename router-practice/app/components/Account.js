import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import SignIn from './SignIn.js';
import ShowInfo from './ShowInfo';
class Account extends React.Component{
    render(){
        var{username} = this.props;
        var html = username == null?<SignIn/>:<ShowInfo/>;
        return(
            <div className="row">
                {html}
            </div>
        )
    }
}

module.exports = connect(function(state){
    return {username: state.username}
})(Account);