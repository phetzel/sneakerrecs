import React, { useContext, useEffect, useState } from 'react';

import ShoeContext from '../../context/shoeContext';
import ShoeDetails from './ShoeDetails';

const Results = () => {
    const { shoes, setShoes } = useContext(ShoeContext);
    const [shoeIdx, setShoeIdx] = useState(0);
    const [shoe, setShoe] = useState(shoes[0]);

    useEffect(() => {
        setShoe(shoes[shoeIdx]);
    }, [shoeIdx])


    return (
        <div className="results">
            { shoes &&
                <ShoeDetails 
                    shoe={shoe}
                    shoeLength={shoes.length}
                    shoeIdx={shoeIdx}
                    setShoeIdx={setShoeIdx} />
            }
        </div>
    )
};

export default Results;
