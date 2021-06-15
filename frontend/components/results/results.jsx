import React, { useContext, useEffect, useState } from 'react';

import ShoeContext from '../../context/shoeContext';
import ShoeDetails from './ShoeDetails';

const Results = () => {
    const { shoes, setShoes } = useContext(ShoeContext);
    const [shoeIdx, setShoeIdx] = useState(0);
    // const [shoe, setShoe] = useState(shoes[0]);

    // useEffect(() => {
    //     console.log('hit');
    //     setShoe(shoes[shoeIdx]);
    // }, [shoeIdx])
    
    
    
    console.log(shoes);

    return (
        <div className="results">
            { shoes && shoes.length &&
                <ShoeDetails 
                    shoe={shoes[shoeIdx]}
                    shoeLength={shoes.length}
                    shoeIdx={shoeIdx}
                    setShoeIdx={setShoeIdx} />
            }
        </div>
    )
};

export default Results;
