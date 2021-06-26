import React, { useContext, useState } from 'react';
import Select from 'react-select';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';
import shoeColors from '../../util/shoeColors';

const ColorSecondary = () => {
    const {
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

    // const colors = [
    //     { value: 'black', label: 'Black' },
    //     { value: 'white', label: 'White' },
    //     { value: 'red', label: 'Red' },
    //     { value: 'blue', label: 'Blue' },
    //     { value: 'green', label: 'Green' },
    //     { value: 'pink', label: 'Pink' },
    //     { value: 'purple', label: 'Purple' },
    // ]

    return (
        <div className="question">
            <QuestionsList />

            <h3>Secondary Colors</h3>

            <Select 
                isMulti
                onChange={handleChange} 
                options={shoeColors} 
                value={colorSecondary} />

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;