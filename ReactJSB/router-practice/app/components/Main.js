import React from "react";
import ReactDOM from "react-dom";
import Nav from './Nav.js'
import {connect} from "react-redux";
import axios from 'axios';
import Notification from './Notification.js';
class Main extends React.Component{
    render(){
        var {notification} = this.props;
        var html = notification != null? <Notification txt={notification}/>:null;
        return(
            <div >
                <Nav/>
                {html}
                {this.props.children}
            </div>
        )
    }
    componentDidMount(){
        var {dispatch} = this.props;
        axios.get('/getInfo')
        .then(res=>{
            if(res.data != "CHUA DANG NHAP"){
                dispatch({type:"LOG_IN",username: res.data});
            }else{
                console.log("CHUA DANG NHAP");
            }
        })
        .catch(err =>console.log(err))
    }
}

module.exports = connect(function(state){
    return {notification: state.notification}
})(Main);