import React, { useContext } from 'react';
import { FriendsContext } from '../../context/QuickCheckFriendsProvider';

const StatsPage = () => {

    const {quickCheck} = useContext(FriendsContext) //custom Context
        console.log( 'FriendsContext, quickCheck', quickCheck )

    return (
        <div>
             <h2 className='text-2xl text-center'>This is StatsPage </h2>
        </div>
    );
};

export default StatsPage;