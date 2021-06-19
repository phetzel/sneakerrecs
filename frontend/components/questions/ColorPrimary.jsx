import React, { useContext } from 'react';
import Select from 'react-select';

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

    const handleChange = selected => {
        setColorPrimary(selected);
    }

    const handleNext = () => {
        setQuestion(3);
        const newMax = maxQuestion + 1;
        if (newMax <= 3) setMaxQuestion(newMax);
    }

    const colors = [
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'red', label: 'Red' },
    ]

    
    return (
        <div className="question">
            <QuestionsList />

            <h3>Primary Color</h3>

            <Select 
                onChange={handleChange} 
                options={colors} 
                value={colorPrimary} />


            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default ColorPrimary;