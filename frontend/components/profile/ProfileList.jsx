import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'; 
import { fetchShoes } from '../../api/shoe_api';
import ProfileListEmpty from './ProfileListEmpty';

const ProfileList = ({ setShoe, userId, shoe }) => {
    const [shoes, setShoes] = useState();
    const [display, setDisplay] = useState(true);

    const handleClick = (num) => {
        setShoe(shoes[num]);
    }

    useEffect(() => {
        const obj = {'shoe': {}};
        obj['shoe']['id'] = userId;
        userId ? (
            fetchShoes(obj).then(res => setShoes(res))
        ) : (
            fetchShoes().then(res => setShoes(res))
        );
    }, [shoe])



    return (
        <div className="admin-list">
            <div className="admin-list-top">
                <h1>Sneakers</h1>
                <FontAwesomeIcon 
                    className="admin-list-icon"
                    icon={display ?  faCaretDown : faCaretUp} 
                    onClick={() => setDisplay(display ? false : true)} />  
            </div>

            <ul className={display ? "" : "admin-list-hidden"}>
                { shoes && shoes.map((ele, idx) => (
                    <li key={idx} onClick={() => handleClick(idx)}>
                        <img src={ele.photoUrl} />
                        <div className="admin-list-div">
                            <p>{ele.brand.toUpperCase()}</p>
                            <p>{ele.name.toUpperCase()} </p>
                        </div>
                        <div className="admin-list-div">
                            <p>{ele.style.toUpperCase()}</p>
                            <p>{ele.pcolor.toUpperCase()}</p>
                        </div>
                    </li>
                ))}
            </ul>
            { shoes && shoes.length < 1 &&
                <ProfileListEmpty />
            }
        </div>
    )
}

export default ProfileList;