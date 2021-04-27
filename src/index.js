import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route,Switch} from 'react-router-dom'; 
import Portal from './Pages/Portal';
import App from './Pages/App';
import UserProfile from './Pages/UserProfile'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = '/Portal' component ={Portal}/>
      <Route exact path = '/' component = {App}/>
      <Route path = '/UserProfile' component ={UserProfile}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
