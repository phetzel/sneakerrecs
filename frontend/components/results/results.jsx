import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons'; 

import Empty from './Empty';
import QuestionsList from '../questions/QuestionsList';
import ShoeContext from '../../context/shoeContext';
import ShoeDetails from './ShoeDetails';
import UserContext from '../../context/userContext';
import { createUserShoe, deleteUserShoe } from '../../api/user_shoe_api';
import { fetchShoes } from '../../api/shoe_api';

const Results = () => {
    const { shoes, setShoes } = useContext(ShoeContext);
    const { user } = useContext(UserContext);
    const [shoeIdx, setShoeIdx] = useState(0);
    const [saved, setSaved] = useState();
    const [userShoes, setUserShoes] = useState();

    const next = () => {
        const newIdx = shoeIdx + 1;
        setShoeIdx(newIdx);
    }

    const last = () => {
        const newIdx = shoeIdx - 1;
        setShoeIdx(newIdx);
    } 

    const handleSave = () => {
        const shoeId = shoes[shoeIdx].id;
        const userId = user.id;

        const newUserShoe = { shoe_id: shoeId, user_id: userId };

        if (saved) {
            deleteUserShoe(newUserShoe).then(() => console.log('deleted'));
        } else {
            createUserShoe(newUserShoe)
                .then(res => console.log('created'))
        }

        setSaved(saved ? false : true);
    }

    useEffect(() => {
        if (user) {
            const obj = {'shoe': {}};
            obj['shoe']['id'] = user.id;
            fetchShoes(obj).then(res => {
                const shoeIds = res.map(ele => ele.id);
                setUserShoes(shoeIds);
            })
        }
    }, [saved])

    useEffect(() => {
        if (userShoes) {
            const newSave = userShoes.includes(shoes[shoeIdx].id);
            setSaved(newSave); 
        }
    }, [shoeIdx, userShoes]);

    console.log(shoes);

    return (
        <div className="results-container">
            <div className="results-container-list">
                <QuestionsList results={true} />
            </div>

            { shoes && shoes.length > 0 &&
                <div className="results">
                    <div className="results-controls">

                        { shoeIdx != 0 &&
                            <FontAwesomeIcon 
                                className="last-btn" 
                                icon={faArrowCircleLeft} 
                                onClick={last} />
                        }


                        <ShoeDetails 
                            shoe={shoes[shoeIdx]}
                            shoeLength={shoes.length}
                            shoeIdx={shoeIdx}
                            setShoeIdx={setShoeIdx} />


                        { shoeIdx < shoes.length - 1 &&
                            <FontAwesomeIcon 
                                className="next-btn" 
                                icon={faArrowCircleRight} 
                                onClick={next} />
                        }
                    </div>
                </div>
            }

            { shoes && shoes.length > 0 && 
                <div className="results-bottom">
                    <div className="results-bottom-placeholder"></div>
                    <p>{`${shoeIdx + 1} / ${shoes.length}`}</p>
                    <div className="results-bottom-placeholder">
                        { user &&
                            <div className={saved ? "results-saved" : "results-unsaved"}>
                                <FontAwesomeIcon 
                                    className={saved ? "results-saved-i" : "results-unsaved-i"}
                                    icon={faSave} 
                                    onClick={handleSave} />  
                                <p>{saved ? 'Saved' : 'Unsaved'}</p> 
                            </div>
                        }
                    </div>
                </div>
            }

            { shoes && !shoes.length && 
                <Empty />
            }
        </div>
    )
};

export default Results;
