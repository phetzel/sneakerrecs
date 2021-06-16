import React, { useEffect, useState } from 'react';

import { fetchShoes } from '../../api/shoe_api';

const AdminList = ({ setShoe }) => {
    const [shoes, setShoes] = useState();

    const handleClick = (num) => {
        setShoe(shoes[num]);
    }

    useEffect(() => {
        fetchShoes().then(res => setShoes(res));
    }, [])

    return (
        <div className="admin-list">
            <h1>All Sneakers</h1>

            <ul>
                { shoes && shoes.map((ele, idx) => (
                    <li key={idx} onClick={() => handleClick(idx)}>
                        {ele.brand} - {ele.name} - {ele.pcolor}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminList;