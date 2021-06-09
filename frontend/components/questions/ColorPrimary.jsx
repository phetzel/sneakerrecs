import React, { useContext } from 'react';

import ShoeContext from '../../context/shoeContext';

const ColorPrimary = ({ setQuestion }) => {
    const { setColorPrimary } = useContext(ShoeContext);

    const handleChange = e => {
        setColorPrimary(e.target.value);
    }
    
    return (
        <div className="question">
            <h3>Primary Color</h3>


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

            <div className="splash-left-btn" onClick={() => setQuestion(4)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorPrimary;