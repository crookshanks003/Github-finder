import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    SINGLE_USER,
    GET_REPOS,
} from "../types";

const GithubState = props => {
    const initialState = {
        users: [],
        loading: false,
        user: {},
        repos: [],
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async search => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/search/users?q=${search}`
        );

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items,
        });
    };

    const singleUser = async login => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${login}`);
        dispatch({
            type: SINGLE_USER,
            payload: res.data,
        });
    };

    const getRepos = async login => {
        setLoading();
        const res = await axios.get(
            `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`
        );
        
        dispatch({ type: GET_REPOS, payload: res.data });
    };

    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                user: state.user,
                repos: state.repos,
                searchUsers,
                singleUser,
                clearUsers,
                getRepos,
            }}>
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
