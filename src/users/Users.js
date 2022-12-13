import React from 'react';
import axios from 'axios';
import UserItem from './UserItem';
// boilerplate
// fetch
// render

class Users extends React.Component {

    state = {
        users: [],
        hasError: false
    }

    constructor() {
        super();
        // api calls
        // light weight
        // conditional rendering
        axios.get('https://api.github.com/users')
            .then(res => this.setState({ users: res.data }))
            .catch(err => {
                this.setState({ hasError: true });
            });
    }

    render() {
        return <div className="container">
            {
                this.state.hasError ?
                    <div className="alert alert-danger m-3">
                        Something went wrong, please try again
                    </div>
                    : null
            }

            <h1>Users</h1>
            {this.state.users.map(user => <UserItem user={user} />)}
        </div>
    }
}

export default Users;
