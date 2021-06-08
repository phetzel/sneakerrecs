import React from 'react';
import Lottie from 'react-lottie';

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

    return (
        <div className="splash-right">
            <Lottie 
	            options={defaultOptions}
                height={300}
                width={300}
            />
        </div>
    )
}

export default SplashRight;