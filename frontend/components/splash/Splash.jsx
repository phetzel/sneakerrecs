import React, { useState } from 'react';

import SplashLeft from './SplashLeft';
import SplashRight from './SplashRight';
import Questions from '../questions/Questions';

const Splash = () => {
    const [started, setStarted] = useState(false);

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