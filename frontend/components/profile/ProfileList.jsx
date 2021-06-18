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
                        <img src={ele.photoUrl} />
                        <div>
                            <p>{ele.brand.toUpperCase()}</p>
                            <p>{ele.name.toUpperCase()} </p>
                        </div>
                        <div>
                            <p>{ele.style.toUpperCase()}</p>
                            <p>{ele.pcolor.toUpperCase()}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileList;