import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/QuickCheckFriendsProvider';

import TimeLineStatus from '../../components/ui/timeLineStatus/TimeLineStatus';
import TimelineNotFound from '../../components/timelinePage/TimelineNotFound';


const TimeLinePage = () => {

    const {quickCheck} = useContext(FriendsContext) //custom Context
            console.log( 'FriendsContext, quickCheck', quickCheck )
            
            // const {name, type} = quickCheck   
            // console.log(name, type) // undefined
    
    const [filerInfo, setFilterInfo] = useState([])
    const handleFilter = (info) =>{

        console.log(info, 'filter data')
        const expectedFilterInfo = quickCheck.filter(data => data.type == info)

        console.log(expectedFilterInfo)


    }


    return (

        <>

        { 
        quickCheck.length === 0 ? 
            <TimelineNotFound></TimelineNotFound> :

            (<div className='container mx-auto space-y-6 px-4 py-10  md:p-16  lg:p-20'>
                <h2 className='text-3xl  lg:text-5xl font-bold '>Timeline </h2>

                <select defaultValue="Filter Timeline All" className="select border-zinc-200 outline-hidden">
                    <option onClick={() => handleFilter('all')}>Filter: All</option>
                    <option onClick={() => handleFilter('meetup')}>Filter: Meetup</option>
                    <option onClick={() => handleFilter('audio')}>Filter: Audio</option>
                    <option onClick={() => handleFilter('video')}>Filter: Video</option>
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