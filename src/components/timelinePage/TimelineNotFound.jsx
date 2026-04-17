import React from 'react';

const TimelineNotFound = () => {
    return (
        <div className='container mx-auto space-y-6 px-4 py-10  md:p-16  lg:p-20 '>
            <div className="flex flex-col items-center justify-center card space-y-4 px-8 py-12 md:py-20 w-full shadow  bg-white/60 backdrop-blur-xl border border-gray-200">
                <p className="text-2xl font-semibold text-gray-600">
                    No Timeline status Available
                </p>
                <p className="text-lg text-gray-400">
                There is no call, video, or text status information to display!.
                </p>
            </div>

         </div>
    );
};

export default TimelineNotFound;