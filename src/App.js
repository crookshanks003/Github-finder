import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import About from "./components/pages/About";
import SingleUser from "./components/user/SingleUser";
import GithubState from "./context/github/githubState";
import NotFound from "./components/pages/NotFound";

const App = () => {
    return (
        <GithubState>
            <Router>
                <div>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <Fragment>
                                        <Search />
                                        <Users />
                                    </Fragment>
                                )}
                            />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/user/:login"
                                component={SingleUser}
                            />
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
};

export default App;
