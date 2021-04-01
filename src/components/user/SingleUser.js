import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "./repos/Repos";

export class SingleUser extends Component {
    componentDidMount() {
        this.props.singleUser(this.props.match.params.login);
        this.props.getRepos(this.props.match.params.login);
    }

    render() {
        const {
            login,
            company,
            name,
            html_url,
            avatar_url,
            following,
            followers,
            hirable,
            bio,
            blog,
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
                            <ul className="mt-1">
                                <li>
                                    {login && (
                                        <>
                                            <span className="text-bold">
                                                Username:
                                            </span>{" "}
                                            {login}
                                        </>
                                    )}
                                </li>
                                <li className="mt-05">
                                    {company && (
                                        <>
                                            <span className="text-bold">
                                                Company:
                                            </span>{" "}
                                            {company}
                                        </>
                                    )}
                                </li>
                                <li className="mt-05">
                                    {blog && (
                                        <>
                                            <span className="text-bold">
                                                Website:
                                            </span>{" "}
                                            <a href={blog}>{blog}</a>
                                        </>
                                    )}
                                </li>
                            </ul>
                            <a
                                href={html_url}
                                className="btn btn-dark mt-1"
                                target="blank">
                                Visit GitHub Profile
                            </a>
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="badge badge-primary">
                            Followers: {followers}
                        </div>
                        <div className="badge badge-success">
                            Following: {following}
                        </div>
                        <div className="badge badge-light">
                            Public Repos: {public_repos}
                        </div>
                        <div className="badge badge-dark">
                            Public Gists: {public_gists}
                        </div>
                    </div>
                    <Repos repos={this.props.repos} />
                </>
            );
        }
    }
}

export default SingleUser;
