import { React, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import LazyLoad from './Components/LayLoadSpinner/LazyLoadSpinner';
import './App.css';

import Header from './Components/Header/Header.js';
import GetRide from './Components/GetRide/GetRide.js';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import Footer from './Components/Footer/Footer.js';
import RideSearch from './Components/RideSearch/RideSearch.js';

const Home = lazy(() => import('./Components/Home/Home.js'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));


function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                 <Route render={({location}) => (
                     <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                        >
                          <Suspense fallback={<LazyLoad></LazyLoad>}>
                              <Switch location={location}>
                                  <Route exact path="/">
                                      <Header></Header>
                                      <Home></Home>
                                      <GetRide></GetRide>
                                      <Footer></Footer>
                                  </Route>
                                  <Route path="/home">
                                      <Header></Header>
                                      <Home></Home>
                                      <GetRide></GetRide>
                                      <Footer></Footer>
                                  </Route>
                                  <Route path="/login">
                                      <Header></Header>
                                      <Login></Login>
                                      <Footer></Footer>
                                  </Route>
                                  <Route path="/signup">
                                      <Header></Header>
                                      <SignUp></SignUp>
                                      <Footer></Footer>
                                  </Route>
                                  <Route path="/ride-search">
                                      <Header></Header>
                                      <RideSearch></RideSearch>
                                      <Footer></Footer>
                                  </Route>
                                  <Route path="/ride-search/:userKey">
                                      <NotFound></NotFound>
                                  </Route>
                                  <Route path="*">
                                      <NotFound></NotFound>
                                  </Route>
                              </Switch>
                            </Suspense>
                        </CSSTransition>
                    </TransitionGroup>
                 )} />
            </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
