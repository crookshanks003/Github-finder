import React, { Component } from 'react'
import User from './User'

export class Users extends Component {

    state = {
        users: [
            {
                id: 1,
                login: "mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                url: "https://github.com/mojombo"        
            },
            {
                id: 2,
                login: "defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                url: "https://github.com/defunkt"        
            },
            {
                id: 3,
                login: "pjhyett",
                avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
                url: "https://github.com/pjhyett"        
            },
        ]
    }
    render() {
        return (
            <div style={style}>
                {this.state.users.map(
                    (user) => (
                    <User key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
