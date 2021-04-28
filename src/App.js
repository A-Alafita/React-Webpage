import UserProfile from './Pages/UserProfile';
import Portal from './Pages/Portal';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
// import { Portal, UserProfile, Register,Welcome } from './Pages';
// import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch, HashRouter, Link } from 'react-router-dom';



function App() {
    return (

        <Switch>
            {/* <Route exactpath='/Webpage' component={App} />
                <Route exactpathpath='/Portal' component={Portal} />
                <Route exactpathpath='/UserProfile' component={UserProfile} />
                <Route exactpathpath='/Register' component={Register} /> */}
            <Route exact path='/'><Welcome /></Route>
            <Route path='/Portal'><Portal /></Route>
            <Route path='/UserProfile'><UserProfile /> </Route>
            <Route path='/Register'><Register /></Route>



        </Switch>
    );
}
export default App;
