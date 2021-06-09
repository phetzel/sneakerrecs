import React, { useContext } from 'react';

import ShoeContext from '../../context/shoeContext';

const ColorAmount = ({ setQuestion }) => {
    const { colorAmount, setColorAmount, style } = useContext(ShoeContext);

    const handleChange = e => {
        setColorAmount(+e.target.value);
    }

    const styleLink = style ? `Style: ${style}` : 'Style';

    return (
        <div className="question">
            <ul>
                <li onClick={() => setQuestion(1)}>{styleLink}</li>
            </ul>

            <h3>Color Amount</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input 
                        type="radio" 
                        value="1" 
                        name="colorAmt" 
                        checked={colorAmount === 1} /> Solid
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="2" 
                        name="colorAmt" 
                        checked={colorAmount === 2} /> Two Colors
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="3" 
                        name="colorAmt" 
                        checked={colorAmount === 3} /> More than Two
                </label>
            </div>

            <div className="splash-left-btn" onClick={() => setQuestion(3)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorAmount;