import React, { useState } from 'react';

import AdminForm from './AdminForm';
import AdminDisplay from './AdminDisplay';
import AdminList from './AdminList';

const AdminProfile = () => {
    const [shoe, setShoe] = useState();

    return (
        <div className="admin">
            <AdminForm shoe={shoe} setShoe={setShoe} />
            { shoe ? (
                <AdminDisplay shoe={shoe} setShoe={setShoe} />
            ) : (
                <AdminList setShoe={setShoe} />
            )
            }
        </div>
    )
}

export default AdminProfile;
