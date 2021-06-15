import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import ShoeContext from '../../context/shoeContext';
import { fetchShoes } from '../../api/shoe_api';

const Generate = ({ setQuestion, history }) => {
    const { 
        style, 
        colorAmount, 
        colorPrimary,
        colorSecondary,
        setShoes
    }  = useContext(ShoeContext);

    const styleLink = style ? `Style: ${style}` : 'Style';
    const colorAmountLink = colorAmount ? (
        `Number of colors: ${colorAmount}`
    ) : (
        'Number of colors'
    );
    const colorPrimaryLink = colorPrimary ? (
        `Primary color: ${colorPrimary}`
    ) : (
        'Primary color'
    );
    const colorSecondaryLink = colorSecondary ? (
        `Primary color: ${colorSecondary}`
    ) : (
        'Primary color'
    );

    const handleGen = () => {
        const obj = { 'shoe': {} }
        obj['shoe']['style'] = style;
        obj['shoe']['pcolor'] = colorPrimary;

        fetchShoes(obj).then(res => {
            setShoes(res);
            history.push('/results');
        })
    }

    return (
        <div className="question">
            <ul>
                <li onClick={() => setQuestion(1)}>{styleLink}</li>
                <li onClick={() => setQuestion(2)}>{colorAmountLink}</li>
                <li onClick={() => setQuestion(3)}>{colorPrimaryLink}</li>
                <li onClick={() => setQuestion(4)}>{colorSecondaryLink}</li>
            </ul>

            <div className="splash-left-btn" onClick={handleGen}>
                <p>Generate</p>
            </div>
        </div>
    )
}

export default withRouter(Generate);