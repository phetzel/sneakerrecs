import React, { useContext } from 'react';

import SplashLeft from './SplashLeft';
import SplashRight from './SplashRight';
import Questions from '../questions/Questions';

import shoeContext from '../../context/shoeContext';

const Splash = () => {
    const { started, setStarted } = useContext(shoeContext);

    return (
        <div className="splash">
            { started ? 
                <Questions /> 
            :
                <SplashLeft setStarted={setStarted} />
            }
            <SplashRight />
        </div>
    )
}

export default Splash;