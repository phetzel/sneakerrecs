import React, { useContext, useState } from 'react';
import Select from 'react-select';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';
import shoeColors from '../../util/shoeColors';
import { multiColourStyles } from '../../util/pickerStyles';

const ColorSecondary = () => {
    const {
        colorPrimary,
        colorSecondary,
        setColorSecondary, 
        setQuestion,
        maxQuestion,
        setMaxQuestion
    }  = useContext(ShoeContext);

    const handleChange = selected => {
        setColorSecondary(selected);
    }
    
    const handleNext = () => {
        setQuestion(4);
        const newMax = maxQuestion + 1;
        if (newMax <= 4) setMaxQuestion(newMax);
    }

    return (
        <div className="question">
            <QuestionsList />

            <h3>Secondary Colors</h3>

            <Select 
                isMulti
                onChange={handleChange} 
                options={shoeColors} 
                styles={multiColourStyles}
                value={colorSecondary} />

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;