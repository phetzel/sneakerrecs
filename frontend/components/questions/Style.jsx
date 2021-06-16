import React, { useContext } from 'react';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';

const Style = () => {
    const { 
        setStyle, 
        style, 
        setQuestion, 
        maxQuestion,
        setMaxQuestion  
    } = useContext(ShoeContext);

    const handleChange = e => {
        setStyle(e.target.value);
    }

    const handleNext = () => {
        setQuestion(2);
        const newMax = maxQuestion + 1;
        if (newMax <= 2 )setMaxQuestion(newMax);
    }

    return (
        <div className="question">
            <QuestionsList />
            
            <h3>Style</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input 
                        type="radio" 
                        value="high-top" 
                        name="style" 
                        checked={style === 'high-top'} /> High-top
                </label>
                {/* <label>
                    <input 
                        type="radio" 
                        value="medium-top" 
                        name="style" 
                        checked={style === 'medium-top'} /> Medium-top
                </label> */}
                <label>
                    <input 
                        type="radio" 
                        value="low-top" 
                        name="style" 
                        checked={style === 'low-top'} /> Low-top
                </label>
            </div>


            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Style;