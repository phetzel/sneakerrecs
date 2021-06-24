import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import ShoeContext from '../../context/shoeContext';

const QuestionsList = ({ results, history }) => {
    const { 
        style, 
        colorAmount, 
        colorPrimary,
        colorSecondary,
        setQuestion,
        maxQuestion
    }  = useContext(ShoeContext);

    const styleLink = style ? `Style: ${style.value}` : 'Style';
    // const colorAmountLink = colorAmount ? (
    //     `Number of colors: ${colorAmount}`
    // ) : (
    //     'Number of colors'
    // );
    const colorPrimaryLink = colorPrimary ? (
        `Primary color: ${colorPrimary.value}`
    ) : (
        'Primary color'
    );
    const colorSecondaryLink = colorSecondary ? (
        `Secondary colors: ${colorSecondary}`
    ) : (
        'Secondary Colors'
    );

    const handleResults = () => {
        if (results) history.push('/');
    }

    return (
        <div className="questions-list">
            <ul onClick={handleResults}>
                { maxQuestion > 1 &&
                    <li onClick={() => setQuestion(1)}>{styleLink}</li>
                }
                { maxQuestion > 2 &&
                    <li onClick={() => setQuestion(2)}>{colorPrimaryLink}</li>
                }
                {/* { maxQuestion > 2 &&
                    <li onClick={() => setQuestion(2)}>{colorAmountLink}</li>
                }
                { maxQuestion > 4 &&
                    <li onClick={() => setQuestion(4)}>{colorSecondaryLink}</li>
                } */}
            </ul>

        </div>
    )
}

export default withRouter(QuestionsList);