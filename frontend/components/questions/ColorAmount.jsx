import React, { useContext } from 'react';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';

const ColorAmount = () => {
    const { 
        colorAmount, 
        setColorAmount, 
        setQuestion,
        maxQuestion,
        setMaxQuestion
    } = useContext(ShoeContext);

    const handleChange = e => {
        setColorAmount(+e.target.value);
    }

    const handleNext = () => {
        setQuestion(3);
        const newMax = maxQuestion + 1;
        if (newMax <= 3) setMaxQuestion(newMax);
    }

    return (
        <div className="question">
            <QuestionsList />

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

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorAmount;