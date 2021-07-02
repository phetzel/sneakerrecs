import React from 'react';

import ShoeColors from './ShoeColors';

const ShoeDetails = ({ shoe }) => {
    const openInNewTab = () => {
        const newWindow = window.open(shoe.url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }



    return (
        <div className="shoe">
            <div className="shoe-left">
                <h1>{shoe.name.toUpperCase()}</h1>
                <div className="shoe-image">
                    <img src={shoe.photoUrl} />
                </div>
            </div>

            <div className="shoe-right">

                <div className="shoe-lower">
                    <p>{(shoe.brand).toUpperCase()}</p>
                    <p>{shoe.style.toUpperCase()}</p>
                </div>

                <ShoeColors
                    shoe={shoe} />

                <div className="shoe-link-btn" onClick={openInNewTab}>
                    <p>View</p>
                </div>
            </div>
        </div>
    )
};

export default ShoeDetails;
