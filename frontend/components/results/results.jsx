import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons'; 

import QuestionsList from '../questions/QuestionsList';
import ShoeContext from '../../context/shoeContext';
import ShoeDetails from './ShoeDetails';
import UserContext from '../../context/userContext';
import { createUserShoe } from '../../api/user_shoe_api';

const Results = () => {
    const { shoes, setShoes } = useContext(ShoeContext);
    const { user } = useContext(UserContext);
    const [shoeIdx, setShoeIdx] = useState(0);

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
        createUserShoe(newUserShoe)
            .then(res => console.log('sucess'))
    }


    return (
        <div className="results-container">
            <div className="results-container-list">
                <QuestionsList results={true} />
            </div>

            { shoes && shoes.length &&
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

            { shoes && shoes.length && 
                <div className="results-bottom">
                    <div className="results-bottom-placeholder"></div>
                    <p>{`${shoeIdx + 1} / ${shoes.length}`}</p>
                    <div className="results-bottom-placeholder">
                        { user &&
                            <FontAwesomeIcon 
                                className="results-save" 
                                icon={faSave} 
                                onClick={handleSave} />   
                        }
                    </div>
                </div>
            }
        </div>
    )
};

export default Results;
