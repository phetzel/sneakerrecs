import React, { useState } from 'react';

const Style = ({ setQuestion }) => {
    const [style, setStyle] = useState();

    const handleChange = e => {
        setStyle(e.target.value);
    }

    return (
        <div className="question">
            <h3>Style</h3>

            <div className="question-radio" onChange={handleChange}>
                <label>
                    <input type="radio" value="high-top" name="style" /> High-top
                </label>
                <label>
                    <input type="radio" value="low-top" name="style" /> Low-top
                </label>
                <label>
                    <input type="radio" value="other" name="style" /> Other
                </label>
            </div>


            <div className="splash-left-btn" onClick={() => setQuestion(2)}>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Style;