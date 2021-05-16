import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, HashRouter, Link } from 'react-router-dom';
import Portal from './Pages/Portal';
import App from './Pages/Welcome';
import UserProfile from './Pages/UserProfile';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import Game from './Pages/Game'; 
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = '/Webpage' component = {Welcome}/>
      <Route path = '/Portal' component ={Portal}/>
      <Route path = '/UserProfile' component ={UserProfile}/>
      <Route path = '/Register' component ={Register}/>
      <Route path = '/Game' component = {Game}/>
    </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
