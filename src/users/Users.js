import React from 'react';
import axios from 'axios';
// boilerplate
// fetch
// render

class Users extends React.Component {

    state = {
        users: []
    }

    constructor() {
        super();
        axios.get('https://api.github.com/users')
            .then(res => {
                this.setState({ users: res.data });
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }

    render() {
        return <div className="container">
            <h1>Users</h1>

        </div>
    }
}

export default Users;
