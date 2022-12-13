import React from 'react';

const UserItem = ({ user }) => {
    return (
        <div>
            <img className="rounded-circle" src={user.avatar_url}
                width="100" height="100" alt="user" />
            <h4>{user.login}</h4>
            <hr />
        </div>
    )
};

export default UserItem;
