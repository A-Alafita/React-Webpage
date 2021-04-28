import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, HashRouter, Link } from 'react-router-dom';  
import App from '../src/App';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    {/* <Switch>
      <Route exact path = '/Webpage' component = {Welcome}/>
      <Route path = '/Portal' component ={Portal}/>
      <Route path = '/UserProfile' component ={UserProfile}/>
      <Route path = '/Register' component ={Register}/>
    </Switch> */}
    <App/>

  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
