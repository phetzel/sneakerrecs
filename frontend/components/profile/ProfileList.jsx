import React, { useEffect, useState } from 'react';

import { fetchShoes } from '../../api/shoe_api';

const ProfileList = ({ setShoe, userShoes }) => {
    const [shoes, setShoes] = useState();

    const handleClick = (num) => {
        setShoe(shoes[num]);
    }

    useEffect(() => {
        console.log(userShoes);
        userShoes ? (
            setShoes(userShoes)
        ) : (
            fetchShoes().then(res => setShoes(res))
        );
    }, [])



    return (
        <div className="admin-list">
            <h1>Sneakers</h1>

            <ul>
                { shoes && shoes.map((ele, idx) => (
                    <li key={idx} onClick={() => handleClick(idx)}>
                        {ele.brand.toUpperCase()} -  
                        {ele.name.toUpperCase()} - 
                        {ele.style.toUpperCase()} - 
                        {ele.pcolor.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileList;