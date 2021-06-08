import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Splash from './splash/Splash';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Splash} />
            </Switch>
        </div>
    )
}

export default App;