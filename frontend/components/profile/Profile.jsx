import React, { useContext } from 'react';

import AdminProfile from './AdminProfile';
import UserContext from '../../context/userContext';
import UserProfile from './UserProfile';

const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    const display = user.admin ? (
        <AdminProfile />
    ) : (
        <UserProfile shoes={user.shoes} />
    );

    return (
        <div className="profile">
            {display}
        </div>
    )
}

export default Profile;