import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {Id} = useParams()
    console.log(Id, 'useParams')
    return (
        <div>
            details page ,,,,,,,,,,,,,,,,,,,,,,,,,
        </div>
    );
};

export default FriendDetails;