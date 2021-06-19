import React, { useState } from 'react';

import AdminForm from './AdminForm';
import ProfileDisplay from './ProfileDisplay';
import ProfileList from './ProfileList';
import { deleteShoe } from '../../api/shoe_api';

const AdminProfile = () => {
    const [shoe, setShoe] = useState();

    const remove = () => {
        deleteShoe(shoe.id).then(res => setShoe());
    }

    return (
        <div className="admin">
            <AdminForm shoe={shoe} setShoe={setShoe} />
            { shoe ? (
                <ProfileDisplay 
                    handleRemove={remove}
                    shoe={shoe} 
                    setShoe={setShoe} />
            ) : (
                <ProfileList setShoe={setShoe} />
            )
            }
        </div>
    )
}

export default AdminProfile;
