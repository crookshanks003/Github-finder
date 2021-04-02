import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import About from "./components/pages/About";
import SingleUser from "./components/user/SingleUser";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get("https://api.github.com/users");
        setLoading(false);
        setUsers(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    };
    const searchUser = async search => {
        setLoading(true);
        const res = await axios.get(
            `https://api.github.com/search/users?q=${search}`
        );

        setLoading(false);
        setUsers(res.data.items);
    };

    const singleUser = async login => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${login}`);
        setLoading(false);
        setUser(res.data);
    };

    const getRepos = async login => {
        setLoading(true);
        const res = await axios.get(
            `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
        );
        setLoading(false);
        setRepos(res.data);
    };

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
                                        searchUsers={searchUser}
                                        clearUsers={clearUsers}
                                        isClear={
                                            users.length > 0 ? true : false
                                        }
                                    />
                                    <Users loading={loading} users={users} />
                                </Fragment>
                            )}
                        />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/user/:login"
                            render={props => (
                                <SingleUser
                                    singleUser={singleUser}
                                    user={user}
                                    repos={repos}
                                    loading={loading}
                                    {...props}
                                    getRepos={getRepos}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
