import React, { useContext } from 'react';
import Select from 'react-select';

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

    const handleChange = selected => {
        setStyle(selected);
    }

    const handleNext = () => {
        setQuestion(2);
        const newMax = maxQuestion + 1;
        if (newMax <= 2 )setMaxQuestion(newMax);
    }

    const styles = [
        { value: 'high-top', label: 'High-top' },
        // { value: 'white', label: 'White' },
        { value: 'low-top', label: 'Low-top' },
    ]

    return (
        <div className="question">
            <QuestionsList />
            
            <h3>Style</h3>

            <Select 
                onChange={handleChange} 
                options={styles} 
                value={style} />


            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Style;