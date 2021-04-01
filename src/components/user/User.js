import { Link } from "react-router-dom";

function User({ user }) {
    return (
        <div className="card text-center">
            <img
                src={user.avatar_url}
                alt="img"
                className="round-img"
                style={{ width: "100px" }}
            />
            <h3>{user.login}</h3>
            <Link
                to={`/user/${user.login}`}
                className="btn btn-dark btn-sm my-1">
                More
            </Link>
        </div>
    );
}

export default User;
