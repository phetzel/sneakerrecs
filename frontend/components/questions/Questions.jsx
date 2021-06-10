import React, { useContext } from 'react';

import ColorAmount from './ColorAmount';
import ColorPrimary from './ColorPrimary';
import ColorSecondary from './ColorSecondary';
import Style from './Style';

import ShoeContext from '../../context/shoeContext';

const Questions = () => {
    const { question, setQuestion } = useContext(ShoeContext);

    const obj = {
        1: <Style setQuestion={setQuestion} />,
        2: <ColorAmount setQuestion={setQuestion} />,
        3: <ColorPrimary setQuestion={setQuestion} />,
        4: <ColorSecondary setQuestion={setQuestion} />,
    }

    return (
        <div className="splash-left">
            <h1 id="question-title">Question {question}</h1>
            {obj[question]}
        </div>
    );
}

export default Questions;
