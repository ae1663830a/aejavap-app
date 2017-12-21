import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Router, Route, IndexRoute, hashHistory, IndexRedirect} from 'react-router'
import axios from 'axios'
import InstitucijaListClass from './containers/InstitucijaListClass/InstitucijaListClass'
import InstitucijaDetailsClass from './containers/InstitucijaDetailsClass/InstitucijaDetailsClass'
import InstitucijaCreateClass from './containers/InstitucijaCreateClass/InstitucijaCreateClass'

axios.defaults.baseURL = 'http://localhost:8888/api/';


const InitialApp = (props) => {
    return <div>
        {props.children}
    </div>
};

const NoMatch = () => {
    return <div className="notFound">
        <h1>Page not found</h1><br/>
        <p>
            <button className="btn btn-lg btn-warning" onClick={() => hashHistory.replace('/')}>
                To main page
            </button>
        </p>
    </div>;
};

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={InitialApp}>
            <IndexRoute component={InstitucijaListClass}/>
            <IndexRedirect to='institucijos'/>
            <Route path="/institucijos" component={InstitucijaListClass}/>
            <Route path="/institucijos/:id" component={InstitucijaDetailsClass}/>
            {/*<Route path="/admin" component={InstitucijaAdminList}/>*/}
            <Route path="/admin/institucijos" component={InstitucijaCreateClass}/>
            <Route path="/admin/institucijos/:id" component={InstitucijaCreateClass}/>
            <Route path="/help" component={InstitucijaListClass}/>
            <Route path="*" component={NoMatch}/>
            <Route component={InstitucijaListClass}/>
        </Route>
    </Router>
), document.getElementById('root'));