import React from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import Loader from '../common/Loader';
import Error from '../common/Error';
// boilerplate
// fetch
// render

class Users extends React.Component {

    state = {
        users: [],
        hasError: false,
        loading: true,
    }

    constructor() {
        super();
        // api calls
        // light weight
        // conditional rendering
        axios.get('https://api.github.com/users')
            .then(res => this.setState({ users: res.data }))
            .catch(err => this.setState({ hasError: true }))
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        return <div className="container">
            <h1>Users</h1>
            {this.state.hasError ? <Error /> : null}
            {this.state.loading ? <Loader /> : null}
            {this.state.users.map(user => <UserItem user={user} />)}
        </div>
    }
}

export default Users;
