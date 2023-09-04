import React from 'react'

function User_profile(props) {
    const { name, email, avatarUrl } = props;

    return (
        <div className="user-profile">
            <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
            <div className="user-info">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
            </div>
        </div>
    )
}

export default User_profile