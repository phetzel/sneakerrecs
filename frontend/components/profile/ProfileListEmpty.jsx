import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import ShoeContext from '../../context/shoeContext';

const ProfileListEmpty = ({ history }) => {
    const { setQuestion, setStarted } = useContext(ShoeContext);

    const handleClick = () => {
        setStarted(true);
        setQuestion(1);
        history.push('/');
    }

    return (
        <div className="profile-list-empty">
            <h4>You dont have any saved shoes currently.</h4>
            <h6 onClick={handleClick}>Go generate some!</h6>
        </div>
    )
}

export default withRouter(ProfileListEmpty);