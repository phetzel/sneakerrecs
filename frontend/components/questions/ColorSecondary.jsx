import React, { useContext } from 'react';
import Select from 'react-select';

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


    const handleChange = selected => {
        setColorSecondary(selected);
    }
    
    const handleNext = () => {
        setQuestion(4);
        const newMax = maxQuestion + 1;
        if (newMax <= 4) setMaxQuestion(newMax);
    }

    const colors = [
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'red', label: 'Red' },
    ]

    return (
        <div className="question">
            <QuestionsList />

            <h3>Secondary Color</h3>

            <Select 
                isMulti
                onChange={handleChange} 
                options={colors} 
                value={colorSecondary} />

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorSecondary;