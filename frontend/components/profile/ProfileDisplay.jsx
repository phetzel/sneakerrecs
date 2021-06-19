import React from 'react';

import ShoeDetails from '../results/ShoeDetails';

const ProfileDisplay = ({ shoe, setShoe, handleRemove }) => {
    return (
        <div className="admin-display">
            { shoe && 
                <ShoeDetails shoe={shoe} />
            }

            <div className="admin-display-buttons">
                <div 
                    onClick={() => setShoe()}
                    className="display-back-btn">
                        <p>Back</p>
                </div>
                <div 
                    onClick={handleRemove}
                    className="display-delete-btn">
                        <p>Remove</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileDisplay;