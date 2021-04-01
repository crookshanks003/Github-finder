import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export class SingleUser extends Component {
    componentDidMount() {
        this.props.singleUser(this.props.match.params.login);
        console.log(this.props);
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
            location,
        } = this.props.user;

        if (this.props.loading) {
            return <Spinner />;
        } else {
            return (
                <>
                    <div className="navbar">
                        <Link to="/" className="btn btn-light text-dark">
                            Back to search
                        </Link>
                        <div>
                            Hireable:{" "}
                            {hirable ? (
                                <i className="fas fa-check text-success" />
                            ) : (
                                <i className="fas fa-times-circle text-danger" />
                            )}
                        </div>
                    </div>
                    <div className="card grid-2">
                        <div className="all-center">
                            <img
                                src={avatar_url}
                                alt="img"
                                className="round-img"
                                style={{ width: "175px" }}
                            />
                            <h3 className="mt-1">{name}</h3>
                            <p style={{ marginTop: "-5px" }}>{location}</p>
                        </div>
                        <div>
                            {bio && (
                                <>
                                <h3>Bio:</h3>
                                <p>{bio}</p>
                                </>
                            )}
                            <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
                        </div>
                    </div>
                </>
            );
        }
    }
}

export default SingleUser;
