import React, { useContext } from 'react';

import ColorAmount from './ColorAmount';
import ColorPrimary from './ColorPrimary';
import ColorSecondary from './ColorSecondary';
import Generate from './Generate';
import Style from './Style';

import ShoeContext from '../../context/shoeContext';

const Questions = () => {
    const { question, setQuestion } = useContext(ShoeContext);

    const obj = {
        1: <Style />,
        2: <ColorPrimary />,
        3: <Generate />,
        4: <ColorAmount />,
        5: <ColorSecondary />,
    }

    const title = question === 3 ? 'Get Recomendations' :`Question ${question}`;

    return (
        <div className="splash-left">
            <h1 id="question-title">{title}</h1>
            {obj[question]}
        </div>
    );
}

export default Questions;
