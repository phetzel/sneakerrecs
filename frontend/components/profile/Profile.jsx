import React, { useContext } from 'react';

import AdminProfile from './AdminProfile';
import UserContext from '../../context/userContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    const display = user.admin ? (
        <AdminProfile />
    ) : (
        <ul>
            <h1>Searches</h1>
            <h1>Shoes</h1>
        </ul>
    )

    return (
        <div className="profile">
            {display}
        </div>
    )
}

export default Profile;