import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    SINGLE_USER,
    GET_REPOS,
} from "../types";

const githubReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        case SINGLE_USER:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };

        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            };

        case GET_REPOS:
            return {
                ...state,
                loading: false,
                repos: action.payload,
            };

        default:
            return state;
    }
};

export default githubReducer;
