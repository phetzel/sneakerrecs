import React, { useEffect } from 'react';
import chroma from 'chroma-js';

import { fetchShoeColors } from '../../api/shoe_color_api';

const ShoeColors = ({shoeId, pColor, secColors}) => {
    const chromaPColor = chroma(pColor);

    // useEffect(() => {
    //     const obj = {'shoe_color': {}};
    //     obj['shoe_color']['shoe_id'] = shoeId;

    //     fetchShoeColors(obj).then(res => {
    //         console.log(res);
    //         console.log('results');
    //     }).fail(err => console.log(err));
    // }, [shoeId])

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