import { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
    const [search, setText] = useState("");

    const githubContext = useContext(GithubContext);

    const onChange = e => setText(e.target.value);

    const isClear = true ? githubContext.users.length > 0 : false;

    const onSubmit = e => {
        e.preventDefault();
        if (search === "") return;
        githubContext.searchUsers(search);
        setText("");
    };
    return (
        <div>
            <form className="form" style={style} onSubmit={onSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search Users..."
                    onChange={onChange}
                    value={search}
                />
                <input type="submit" className="btn btn-dark" />
            </form>
            {isClear && (
                <button
                    className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}>
                    Clear
                </button>
            )}
        </div>
    );
};

const style = {
    display: "grid",
    gridTemplateColumns: "6fr 1fr",
    gridGap: "1rem",
};

export default Search;
