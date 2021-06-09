import React, { useContext, useState } from 'react';

import ColorAmount from './ColorAmount';
import ColorPrimary from './ColorPrimary';
import ColorSecondary from './ColorSecondary';
import Style from './Style';

const Questions = () => {
    const [question, setQuestion] = useState(1);

    const obj = {
        1: <Style setQuestion={setQuestion} />,
        2: <ColorAmount setQuestion={setQuestion} />,
        3: <ColorPrimary setQuestion={setQuestion} />,
        4: <ColorSecondary setQuestion={setQuestion} />,
    }

    return (
        <div className="splash-left">
            <h1>Questions</h1>
            {obj[question]}
        </div>
    );
}

export default Questions;
