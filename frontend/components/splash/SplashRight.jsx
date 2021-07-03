import React, { useContext } from 'react';
import Lottie from 'react-lottie';

import ShoeContext from '../../context/shoeContext';
import ShoeLottie from '../../../app/assets/images/lottie-shoe.json';

const SplashRight = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ShoeLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const { searching } = useContext(ShoeContext);

    const searchClass = searching ? 'splash-search' : "";

    console.log(window.innerWidth);

    const splashLotttieDimensions = window.innerWidth > 768 ? 300 : 180;

    return (
        <div className={`splash-right ${searchClass}`}>
            <div>
                <Lottie 
                    options={defaultOptions}
                    height={splashLotttieDimensions}
                    width={splashLotttieDimensions}
                />
            </div>
            { searching && 
                <p>Searching the back.</p>
            }
        </div>
    )
}

export default SplashRight;