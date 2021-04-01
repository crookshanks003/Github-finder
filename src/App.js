import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import About from "./components/pages/About";
import SingleUser from "./components/user/SingleUser";
import axios from "axios";

class App extends Component {
    state = {
        users: [],
        loading: false,
        user: {},
        repos: [],
    };

    async componentDidMount() {
        this.setState({ loading: true });

        const res = await axios.get(`https://api.github.com/users`);

        this.setState({ users: res.data, loading: false });
    }

    clearUsers = () => this.setState({ users: [], loading: false });

    searchUser = async search => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/search/users?q=${search}`
        );

        this.setState({ loading: false, users: res.data.items });
    };

    singleUser = async login => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${login}`);
        this.setState({ loading: false, user: res.data });
    };

    getRepos = async login => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
        );
        this.setState({ loading: false, repos: res.data });
    };

    render() {
        return (
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
                                        <Search
                                            searchUsers={this.searchUser}
                                            clearUsers={this.clearUsers}
                                            isClear={
                                                this.state.users.length > 0
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <Users
                                            loading={this.state.loading}
                                            users={this.state.users}
                                        />
                                    </Fragment>
                                )}
                            />
                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/user/:login"
                                render={props => (
                                    <SingleUser
                                        singleUser={this.singleUser}
                                        user={this.state.user}
                                        repos={this.state.repos}
                                        loading={this.state.loading}
                                        {...props}
                                        getRepos={this.getRepos}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
