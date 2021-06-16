import React, { useContext } from 'react';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';

const ColorPrimary = () => {
    const { 
        setColorPrimary, 
        colorPrimary,
        setQuestion,
        maxQuestion,
        setMaxQuestion
    } = useContext(ShoeContext);

    const handleChange = e => {
        setColorPrimary(e.target.value);
    }

    const handleNext = () => {
        setQuestion(4);
        const newMax = maxQuestion + 1;
        if (newMax <= 4) setMaxQuestion(newMax);
    }

    
    return (
        <div className="question">
            <QuestionsList />

            <h3>Primary Color</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input 
                        type="radio" 
                        value="black" 
                        name="colorPri" 
                        checked={colorPrimary === 'black'} /> Black
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="white" 
                        name="colorPri" 
                        checked={colorPrimary === 'white'} /> White
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="red" 
                        name="colorPri" 
                        checked={colorPrimary === 'red'} /> Red
                </label>
            </div>

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorPrimary;