import React from 'react';

import ShoeDetails from '../results/ShoeDetails';

const AdminDisplay = ({ shoe, setShoe }) => {
    return (
        <div className="admin-display">
            { shoe && 
                <ShoeDetails shoe={shoe} />
            }
            <button onClick={() => setShoe()}>Back</button>
        </div>
    )
}

export default AdminDisplay;