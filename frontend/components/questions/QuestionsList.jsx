import React, { useContext } from 'react';
import ShoeContext from '../../context/shoeContext';

const QuestionsList = () => {
    const { 
        style, 
        colorAmount, 
        colorPrimary,
        colorSecondary,
        setQuestion,
        maxQuestion
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

    return (
        <div className="questions-list">
            <ul>
                { maxQuestion > 1 &&
                    <li onClick={() => setQuestion(1)}>{styleLink}</li>
                }
                { maxQuestion > 2 &&
                    <li onClick={() => setQuestion(2)}>{colorAmountLink}</li>
                }
                { maxQuestion > 3 &&
                    <li onClick={() => setQuestion(3)}>{colorPrimaryLink}</li>
                }
                { maxQuestion > 4 &&
                    <li onClick={() => setQuestion(4)}>{colorSecondaryLink}</li>
                }
            </ul>

        </div>
    )
}

export default QuestionsList;