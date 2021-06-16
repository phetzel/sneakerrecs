import React, { useContext } from 'react';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';

const ColorSecondary = () => {
    const { 
        setColorSecondary, 
        colorSecondary,
        setQuestion,
        maxQuestion,
        setMaxQuestion
    }  = useContext(ShoeContext);


    const handleChange = e => {
        setColorSecondary(e.target.value);
    }
    
    const handleNext = () => {
        setQuestion(5);
        const newMax = maxQuestion + 1;
        if (newMax <= 5) setMaxQuestion(newMax);
    }

    return (
        <div className="question">
            <QuestionsList />

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
                        value="red" 
                        name="colorAmt" 
                        checked={colorSecondary === 'red'} /> Red
                </label>
            </div>

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;