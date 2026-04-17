import React from 'react';

import textImg from '../../../assets/text.png'
import videoImg from '../../../assets/video.png'
import meetupImg from '../../../assets/meetup.png'

const TimeLineStatus = ({friend}) => {

    const {name, type} = friend
    console.log(name, type , 'name, type ,')

    const today = new Date().toLocaleDateString("en-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
            <section className='flex items-center gap-6 p-6 stats shadow-sm bg-white/60 backdrop-blur-xl border border-gray-200 '>
                {type === 'call'&& <img src={meetupImg} alt="textImg" className='h-12 w-12' />}

                {type === 'video' && <img src={videoImg} alt="textImg" className='h-12 w-12' />}

                {type === 'text' && <img src={textImg} alt="textImg" className='h-12 w-12' />}
                    
                    <div>
                        <p><span className='font-semibold'>Meetup</span> with <span className='font-semibold'>{friend.name}</span></p>
                        <data value="" className=''>{today}</data>
                    </div>
            </section>
    );
};

export default TimeLineStatus;