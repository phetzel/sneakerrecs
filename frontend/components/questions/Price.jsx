import React, { useContext } from 'react';
import Select from 'react-select';

import QuestionsList from './QuestionsList';
import ShoeContext from '../../context/shoeContext';

const Price = () => {
    const { 
        setPrice, 
        price,
        setQuestion,
        maxQuestion,
        setMaxQuestion
    } = useContext(ShoeContext);

    const handleChange = selected => {
        setPrice(selected);
    }

    const handleNext = e => {
        e.preventDefault();
        setQuestion(5);
        const newMax = maxQuestion + 1;
        if (newMax <= 5) setMaxQuestion(newMax);
    }

    const prices = [
        { value: null, label: 'Any' },
        { value: 300, label: 'Under $300' },
        { value: 100, label: 'Under $100' },
    ]

    return (
        <div className="question">
            <QuestionsList />

            <h3>Price Range</h3>

            <Select
                onChange={handleChange}
                options={prices}
                isSearchable={false}
                value={price} />

            <div className="splash-left-btn" onClick={handleNext}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Price;