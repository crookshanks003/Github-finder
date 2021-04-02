import { useContext } from "react";
import User from "./User";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

function Users() {
    const githubContext = useContext(GithubContext);

    if (githubContext.loading) {
        return <Spinner />;
    } else {
        return (
            <div style={style}>
                {githubContext.users.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
};

export default Users;
