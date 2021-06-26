import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { fetchShoes } from '../../api/shoe_api';
import ShoeContext from '../../context/shoeContext';
import QuestionsList from './QuestionsList';

const Generate = ({ setQuestion, history }) => {
    const { 
        style, 
        // colorAmount, 
        colorPrimary,
        colorSecondary,
        setShoes
    }  = useContext(ShoeContext);
    


    const handleGen = () => {
        const obj = { 'shoe': {} }
        if (style) obj['shoe']['style'] = style.value;
        if (colorPrimary) obj['shoe']['pcolor'] = colorPrimary.value;

        fetchShoes(obj).then(res => {
            setShoes(res);
            history.push('/results');
        })
    }

    return (
        <div className="question">
            <QuestionsList />

            <div className="splash-left-btn" onClick={handleGen}>
                <p>Generate</p>
            </div>
        </div>
    )
}

export default withRouter(Generate);