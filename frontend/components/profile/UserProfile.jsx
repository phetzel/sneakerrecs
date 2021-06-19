import React, { useState } from 'react';

import ProfileDisplay from './ProfileDisplay';
import ProfileList from './ProfileList';
import { deleteUserShoe } from '../../api/user_shoe_api';

const UserProfile = ({ user }) => {
    const [shoe, setShoe] = useState();

    const remove = () => {
        const obj = { user_id: user.id, shoe_id: shoe.id };
        deleteUserShoe(obj).then(() => setShoe());
    }

    return (
        <div className="user-profile">
            { user &&
                <ProfileList 
                    shoe={shoe}
                    setShoe={setShoe} 
                    userId={user.id} />
            }
            
            { shoe && 
                <ProfileDisplay 
                    id={user.id}
                    handleRemove={remove}
                    shoe={shoe} 
                    setShoe={setShoe} /> 
            }
        </div>
    )
}

export default UserProfile;