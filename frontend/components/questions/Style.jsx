import React, { useContext } from 'react';

import ShoeContext from '../../context/shoeContext';

const Style = ({ setQuestion }) => {
    const { setStyle, style } = useContext(ShoeContext);

    const handleChange = e => {
        setStyle(e.target.value);
    }

    return (
        <div className="question">
            <h3>Style</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input 
                        type="radio" 
                        value="high-top" 
                        name="style" 
                        checked={style === 'high-top'} /> High-top
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="medium-top" 
                        name="style" 
                        checked={style === 'medium-top'} /> Medium-top
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="low-top" 
                        name="style" 
                        checked={style === 'low-top'} /> Low-top
                </label>
            </div>


            <div className="splash-left-btn" onClick={() => setQuestion(2)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Style;