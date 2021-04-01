import React, { Component } from "react";

export class Search extends Component {
    state = {
        search: "",
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        if (this.state.search === "") return;
        this.props.searchUsers(this.state.search);
        this.setState({ search: "" });
    };

    render() {
        return (
            <div>
                <form className="form" style={style} onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Users..."
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <input type="submit" className="btn btn-dark" />
                </form>
                {this.props.isClear && (
                    <button
                        className="btn btn-light btn-block"
                        onClick={this.props.clearUsers}>
                        Clear
                    </button>
                )}
            </div>
        );
    }
}

const style = {
    display: "grid",
    gridTemplateColumns: "6fr 1fr",
    gridGap: "1rem",
};

export default Search;
