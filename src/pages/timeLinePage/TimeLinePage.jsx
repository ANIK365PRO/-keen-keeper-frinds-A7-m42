import React, { useContext } from 'react';
import { FriendsContext } from '../../context/QuickCheckFriendsProvider';

import TimeLineStatus from '../../components/ui/timeLineStatus/TimeLineStatus';
import TimelineNotFound from '../../components/timelinePage/TimelineNotFound';


const TimeLinePage = () => {

    const {quickCheck} = useContext(FriendsContext) //custom Context
            console.log( 'FriendsContext, quickCheck', quickCheck )

    // const {name, type} = quickCheck    
    
    

    return (

        <>

        { 
        quickCheck.length === 0 ? 
            <TimelineNotFound></TimelineNotFound> :

            (<div className='container mx-auto space-y-6 px-4 py-10  md:p-16  lg:p-20 border'>
                <h2 className='text-3xl  lg:text-5xl font-bold '>Timeline </h2>

                <select defaultValue="Pick a font" className="select border-zinc-200 outline-hidden">
                    <option >Filter Timeline</option>
                    <option>Meetup</option>
                    <option>Audio</option>
                    <option>Video</option>
                </select>

                <div className='space-y-6'>
                    {
                        quickCheck.map((friend, ind) => <TimeLineStatus key={ind} friend={friend}></TimeLineStatus>)
                    }
                </div>
            </div>)

        }
        
        </>
    );
};

export default TimeLinePage;