import React, { useContext } from 'react';

import ShoeContext from '../../context/shoeContext';

const ColorSecondary = ({ setQuestion }) => {
    const { 
        setColorSecondary, 
        style, 
        colorAmount, 
        colorPrimary,
        colorSecondary
    }  = useContext(ShoeContext);

    const styleLink = style ? `Style: ${style}` : 'Style';
    const colorAmountLink = colorAmount ? (
        `Number of colors: ${colorAmount}`
    ) : (
        'Number of colors'
    );
    const colorPrimaryLink = colorPrimary ? (
        `Primary color: ${colorPrimary}`
    ) : (
        'Primary color'
    );

    const handleChange = e => {
        setColorSecondary(e.target.value);
    }
    
    return (
        <div className="question">
            <ul>
                <li onClick={() => setQuestion(1)}>{styleLink}</li>
                <li onClick={() => setQuestion(2)}>{colorAmountLink}</li>
                <li onClick={() => setQuestion(3)}>{colorPrimaryLink}</li>
            </ul>

            <h3>Secondary Color</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input 
                        type="radio" 
                        value="black" 
                        name="colorAmt" 
                        checked={colorSecondary === 'black'} /> Black
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="white" 
                        name="colorAmt" 
                        checked={colorSecondary === 'white'} /> White
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="green" 
                        name="colorAmt" 
                        checked={colorSecondary === 'green'} /> Green
                </label>
            </div>

            <div className="splash-left-btn" onClick={() => console.log('hit')}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;