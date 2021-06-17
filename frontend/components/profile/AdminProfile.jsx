import React, { useState } from 'react';

import AdminForm from './AdminForm';
import ProfileDisplay from './ProfileDisplay';
import ProfileList from './ProfileList';

const AdminProfile = () => {
    const [shoe, setShoe] = useState();

    return (
        <div className="admin">
            <AdminForm shoe={shoe} setShoe={setShoe} />
            { shoe ? (
                <ProfileDisplay shoe={shoe} setShoe={setShoe} />
            ) : (
                <ProfileList setShoe={setShoe} />
            )
            }
        </div>
    )
}

export default AdminProfile;
