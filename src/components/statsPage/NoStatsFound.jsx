import React from 'react';

const NoStatsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[30vh] card space-y-4 p-8 w-full shadow  bg-white/60 backdrop-blur-xl border border-gray-200">
            <p className="text-2xl font-semibold text-gray-600">
                No Stats Available
            </p>
            <p className="text-lg text-gray-400">
            There is no call, video, or text stats to display chart.
            </p>
        </div>
    );
};

export default NoStatsFound;