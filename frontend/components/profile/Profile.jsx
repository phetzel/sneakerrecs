import React, { useContext } from 'react';

import AdminProfile from './AdminProfile';
import UserContext from '../../context/userContext';
import UserProfile from './UserProfile';

const Profile = () => {
    const { user } = useContext(UserContext);

    const display = user.admin ? (
        <AdminProfile />
    ) : (
        <UserProfile user={user} />
    );

    return (
        <div className="profile">
            {display}
        </div>
    )
}

export default Profile;