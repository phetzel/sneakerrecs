import React, { useContext } from 'react';
import Select from 'react-select';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';
import { singleColourStyles } from '../../util/pickerStyles';
import shoeColors from '../../util/shoeColors';

const ColorPrimary = () => {
    const { 
        setColorPrimary, 
        colorPrimary,
        setQuestion,
        maxQuestion,
        setMaxQuestion
    } = useContext(ShoeContext);

    const handleChange = selected => {
        setColorPrimary(selected);
    }

    const handleNext = e => {
        e.preventDefault();
        setQuestion(3);
        const newMax = maxQuestion + 1;
        if (newMax <= 3) setMaxQuestion(newMax);
    }
    
    return (
        <div className="question">
            <QuestionsList />

            <h3>Primary Color</h3>

            <Select 
                onChange={handleChange} 
                options={shoeColors} 
                styles={singleColourStyles}
                value={colorPrimary} />


            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorPrimary;