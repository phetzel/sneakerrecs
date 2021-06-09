import React, { useContext } from 'react';

import ShoeContext from '../../context/shoeContext';

const ColorPrimary = ({ setQuestion }) => {
    const { 
        setColorPrimary, 
        style, 
        colorAmount, 
        colorPrimary 
    } = useContext(ShoeContext);

    const handleChange = e => {
        setColorPrimary(e.target.value);
    }

    const styleLink = style ? `Style: ${style}` : 'Style';
    const colorAmountLink = colorAmount ? (
        `Number of colors: ${colorAmount}`
    ) : (
        'Number of colors'
    );
    
    return (
        <div className="question">
            <ul>
                <li onClick={() => setQuestion(1)}>{styleLink}</li>
                <li onClick={() => setQuestion(2)}>{colorAmountLink}</li>
            </ul>

            <h3>Primary Color</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input 
                        type="radio" 
                        value="black" 
                        name="colorAmt" 
                        checked={colorPrimary === 'black'} /> Black
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="white" 
                        name="colorAmt" 
                        checked={colorPrimary === 'white'} /> White
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="green" 
                        name="colorAmt" 
                        checked={colorPrimary === 'green'} /> Green
                </label>
            </div>

            <div className="splash-left-btn" onClick={() => setQuestion(4)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorPrimary;