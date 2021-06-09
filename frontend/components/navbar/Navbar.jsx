import React, { useState } from 'react';

const Navbar = () => {
    const [modComp, setModComp] = useState();
    
    return (
        <div className="navbar">
            <h1>Sneaker Recs</h1>
            <ul>
                <li>Sign In</li>
                <li>Sign Up</li>
            </ul>
        </div>
    )
}

export default Navbar;