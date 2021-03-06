import React, { useContext } from 'react';

import ColorPrimary from './ColorPrimary';
import ColorSecondary from './ColorSecondary';
import Generate from './Generate';
import Price from './Price';
import Style from './Style';

import ShoeContext from '../../context/shoeContext';

const Questions = () => {
    const { question, setQuestion, searching } = useContext(ShoeContext);

    const obj = {
        1: <Style />,
        2: <ColorPrimary />,
        3: <ColorSecondary />,
        4: <Price />,
        5: <Generate />,
    }

    const title = question === 5 ? 'Recomendations' :`Question ${question}`;
    const seachClass = searching ? "splash-search-left" : "";

    return (
        <div className={`splash-left ${seachClass}`}>
            <h1 id="question-title">{title}</h1>
            {obj[question]}
        </div>
    );
}

export default Questions;
