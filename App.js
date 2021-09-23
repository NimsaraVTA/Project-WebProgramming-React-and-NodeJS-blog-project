import TopBar from './topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './about/About';
import Contact from './contact/Contact';
import Showcon from './showcon/Showcon';
import Delete from './deletecon/Delete';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {

    const user = true;


  return (
      <div className="App">

          <Router>
              <TopBar />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route path="/register">
                      {user ? <Register/ > : <Register />}
                  </Route>

                  <Route path="/login">
                      {user ? <Login /> : <Register />}
                  </Route>

                  <Route path="/write">
                      {user ? <Write /> : <Register />}
                  </Route>

                  <Route path="/settings">
                      {user ? <Settings /> : <Register />}
                  </Route>

                  <Route path="/single">
                      {user ? <Single /> : <Register />}
                  </Route>

                  <Route path="/about">
                      {user ? <About /> : <Register />} 
                  </Route>

                  <Route path="/contact">
                      {user ? <Contact /> : <Register />}  
                  </Route>

                  <Route path="/showcon">
                      {user ? <Showcon /> : <Register />}
                  </Route>

                  <Route path="/delete">
                      {user ? <Delete /> : <Register />}
                  </Route>

              </Switch>
              
          </Router>
      
    </div>
  );
}

export default App;
