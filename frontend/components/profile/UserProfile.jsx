import React, { useState } from 'react';

import ProfileDisplay from './ProfileDisplay';
import ProfileList from './ProfileList';

const UserProfile = ({ user }) => {
    const [shoe, setShoe] = useState();

    console.log(user);

    return (
        <div className="user-profile">
            { user &&
                <ProfileList setShoe={setShoe} userShoes={user.shoes} />
            }
            
            { shoe && 
                <ProfileDisplay 
                    id={user.id}
                    shoe={shoe} 
                    setShoe={setShoe} /> 
            }
        </div>
    )
}

export default UserProfile;