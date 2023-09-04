import React from 'react';
import User_profile from './User_profile';

function Profile() {
    const user = {
        name: 'Sagar Singh',
        email: '08sagar.s@gmail.com',
        avatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Component Creation :Task 1</h1>
                        </div>
                        <div className="card-body text-center">
                            <User_profile {...user} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
