import React, { useState } from 'react';

const ColorAmount = ({ setQuestion }) => {
    const [colorAmount, setColorAmount] = useState();

    const handleChange = e => {
        setColorAmount(+e.target.value);
    }
    return (
        <div className="question">
            <h3>Color Amount</h3>


            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input type="radio" value="1" name="colorAmt" /> Solid
                </label>
                <label>
                    <input type="radio" value="2" name="colorAmt" /> Two Colors
                </label>
                <label>
                    <input type="radio" value="3" name="colorAmt" /> More than Two
                </label>
            </div>

            <div className="splash-left-btn" onClick={() => setQuestion(3)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorAmount;