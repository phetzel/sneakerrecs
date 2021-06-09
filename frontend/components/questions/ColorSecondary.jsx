import React, { useContext } from 'react';

import ShoeContext from '../../context/shoeContext';

const ColorSecondary = ({ setQuestion }) => {
    const { setColorSecondary }  = useContext(ShoeContext);
    const CTX = useContext(ShoeContext);


    const handleChange = e => {
        setColorSecondary(e.target.value);
    }
    
    return (
        <div className="question">
            <h3>Secondary Color</h3>


            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input type="radio" value="black" name="colorAmt" /> Black
                </label>
                <label>
                    <input type="radio" value="white" name="colorAmt" /> White
                </label>
                <label>
                    <input type="radio" value="green" name="colorAmt" /> Green
                </label>
            </div>

            <div className="splash-left-btn" onClick={() => console.log(CTX)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;