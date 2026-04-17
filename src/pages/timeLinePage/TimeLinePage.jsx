import React, { useContext } from 'react';
import { FriendsContext } from '../../context/QuickCheckFriendsProvider';

const TimeLinePage = () => {

    const {quickCheck} = useContext(FriendsContext) //custom Context
            console.log( 'FriendsContext, quickCheck', quickCheck )

    return (
        <div>
             <h2 className='text-5xl font-bold '>Timeline </h2>
        </div>
    );
};

export default TimeLinePage;