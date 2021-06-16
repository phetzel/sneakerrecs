import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'; 

import QuestionsList from '../questions/QuestionsList';
import ShoeContext from '../../context/shoeContext';
import ShoeDetails from './ShoeDetails';

const Results = () => {
    const { shoes, setShoes } = useContext(ShoeContext);
    const [shoeIdx, setShoeIdx] = useState(0);

    const next = () => {
        const newIdx = shoeIdx + 1;
        setShoeIdx(newIdx);
    }

    const last = () => {
        const newIdx = shoeIdx - 1;
        setShoeIdx(newIdx);
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
                <p>{`${shoeIdx + 1} / ${shoes.length}`}</p>
            }
        </div>
    )
};

export default Results;
