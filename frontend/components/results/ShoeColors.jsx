import React, { useEffect } from 'react';
import chroma from 'chroma-js';

const ShoeColors = ({ shoe }) => {
    const chromaPColor = chroma(shoe.pcolor); 
    const chromaSecColors = shoe.secColors.map(ele => chroma(ele.name));

    return (
        <div className="shoe-colors">
            <p>COLORS</p>
            <div className="shoe-colors-list">
                <div 
                    className="shoe-colors-primary" 
                    style={{backgroundColor: chromaPColor}}/>
                <ul className="shoe-colors-secondary" >
                    { chromaSecColors.map(ele => (
                        <li style={{backgroundColor: ele}}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ShoeColors;