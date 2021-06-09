import React from 'react';

const SplashLeft = ({ setStarted }) => {
    return (
        <div className="splash-left">
            <h1>The custom shoe recomendation generator!</h1>
            <h6>Answer a few quick questions and then view matching shoes.</h6>
            
            <div className="splash-left-btn" onClick={() => setStarted(true)}>
                <p>Get Recomendations!</p>
            </div>
        </div>
    )
}

export default SplashLeft;