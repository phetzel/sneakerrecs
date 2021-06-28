import React from 'react';
import chroma from 'chroma-js';

const ShoeColors = ({pColor, secColors}) => {
    const chromaPColor = chroma(pColor);
    console.log(chromaPColor);

    return (
        <div className="shoe-colors">
            <p>COLORS</p>
            <div className="shoe-colors-list">
                <div 
                    className="shoe-colors-primary" 
                    style={{backgroundColor: chromaPColor}}/>
            </div>
        </div>
    )
}

export default ShoeColors;