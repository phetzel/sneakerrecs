import React from 'react';

import ShoeDetails from '../results/ShoeDetails';

const ProfileDisplay = ({ shoe, setShoe, id }) => {
    return (
        <div className="admin-display">
            { shoe && 
                <ShoeDetails shoe={shoe} />
            }
            <div 
                onClick={() => setShoe()}
                className="display-back-btn">
                    <p>Back</p>
            </div>
        </div>
    )
}

export default ProfileDisplay;