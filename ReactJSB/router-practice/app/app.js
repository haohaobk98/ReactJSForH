import React from "react";
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.js';
import Nav from './components/Nav.js';
import Account from './components/Account.js';
import Main from './components/Main.js';
import Transaction from './components/Transaction.js';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
var redux = require('redux');
// tao 1 reducer chi ra thuoc tinh username
var username = (state=null,action)=>{
    switch(action.type){
        case 'LOG_IN': return action.username;
        case 'LOG_OUT': return null;
        default: return state;
    }
}

var notification = (state=null,action)=>{
    switch(action.type){
        case 'SHOW_NOTI': return action.txt;
        case 'HIDE_NOTI': return null;
        default: return state;
    }
}
var reducer = redux.combineReducers({username,notification});
var store = redux.createStore(reducer);
//store.dispatch({type:'LOG_IN',username:'hao'})
function requireUser(nextState,replace,next){
    if(store.getState().username == null){
        replace('/');
    }
    next();
}
//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!./css/style.css');
$(document).ready(()=>$(document).foundation());
ReactDOM.render(
    
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router path="/" component={Main}>
            <IndexRoute component={Homepage}/> 
                <Route path="account" component={Account}/>
                <Route path="transaction" component={Transaction} onEnter={requireUser}/>
            </Router>
        </Router>
    </Provider>
    
    ,document.getElementById("root")
)