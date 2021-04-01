import User from "./User";
import Spinner from "../layout/Spinner";

function Users({ users, loading }) {
    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div style={style}>
                {users.map(user => (
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
