import React from 'react';

import ShoeDetails from '../results/ShoeDetails';

const ProfileDisplay = ({ shoe, setShoe, id }) => {
    return (
        <div className="admin-display">
            { shoe && 
                <ShoeDetails shoe={shoe} />
            }
            <button onClick={() => setShoe()}>Back</button>
        </div>
    )
}

export default ProfileDisplay;