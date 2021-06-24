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
        3: <ColorSecondary />,
        4: <Generate />,
        5: <ColorAmount />,
    }

    const title = question === 4 ? 'Recomendations' :`Question ${question}`;

    return (
        <div className="splash-left">
            <h1 id="question-title">{title}</h1>
            {obj[question]}
        </div>
    );
}

export default Questions;
