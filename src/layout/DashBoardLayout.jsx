import React from 'react';

const DashBoardLayout = () => {
    return (
        <section>
        <div className='bg-linear-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-[#F8FAFC] py-20'>
             <h2 className='text-4xl text-center '>This is DashBoardLayout </h2>
        </div>
        <div className='bg-black p-10'>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-xl shadow-lg w-60 mx-auto">
                <h2 className="text-white text-lg font-bold">John Doe</h2>
                <p className="text-gray-300">Frontend Developer</p>
            </div>
            
        </div>
        <div className='p-10'>

            <div className="bg-white/50 backdrop-blur-xl border border-gray-200 shadow-lg p-5 rounded-xl  w-60 mx-auto">
                <h2 className="text-gray-800 font-bold">Friend Name</h2>
                <p className="text-gray-500">Frontend Developer</p>
            </div>
        </div>
        <div className='p-10 bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900'>

            <div className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg p-5 rounded-xl  w-60 mx-auto">
                <h2 className="text-white font-bold">Friend Name</h2>
                <p className="text-gray-300">Frontend Developer</p>
            </div>
        </div>

        </section>
    );
};

export default DashBoardLayout;