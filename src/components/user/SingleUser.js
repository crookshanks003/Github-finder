import React, { Component } from "react";
import Spinner from "../layout/Spinner";

export class SingleUser extends Component {
    componentDidMount() {
        this.props.singleUser(this.props.match.params.login);
    }

    
    render() {
        const {
            login,
            name,
            html_url,
            avatar_url,
            following,
            followers,
            hirable,
            bio,
            public_repos,
            public_gists,
            location
        } = this.props.user;

        if (this.props.loading) {
            return <Spinner />;
        } else {
            return (<div>{name}</div>);
        }
    }
}

export default SingleUser;
