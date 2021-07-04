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
import Home from './Components/Home/Home.js';
import Header from './Components/Header/Header.js';
import GetRide from './Components/GetRide/GetRide.js';
import Footer from './Components/Footer/Footer.js';
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
                            <Switch location={location}>
                                <Route path="/home">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Header></Header>
                                            <Home></Home>
                                            <GetRide></GetRide>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/profile/:outletKey">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                          <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                                <Route exact path="/">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Header></Header>
                                            <Home></Home>
                                            <GetRide></GetRide>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="*">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                 )} />
            </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
