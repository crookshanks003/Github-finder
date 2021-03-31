
function User({user}) {
    return (
        <div className="card text-center">
            <img src={user.avatar_url} alt="img" className="round-img" style={{width:'100px'}}/>
            <h3>{user.login}</h3>
            <a href={user.url} className="btn btn-dark btn-sm my-1" target="blank">More</a>
        </div>
    )
}

export default User
