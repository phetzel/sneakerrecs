import React, { useState } from 'react';

const ColorSecondary = ({ setQuestion }) => {
    const [colorSecondary, setColorSecondary] = useState();

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

            <div className="splash-left-btn" onClick={() => setQuestion(4)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;