import React from 'react';

const Stats = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 p-4  '>
            
            <section className="stats shadow text-center bg-white/60 backdrop-blur-xl border border-gray-200 md:py-6 ">
                <div className="stat px-2 md:px-6">
                    <div className="stat-value  font-semibold text-3xl">14</div>
                    <div className="stat-title text-wrap text-[16px] md:text-lg">Total Friends</div>      
                </div>
            </section>

            <section className="stats shadow-sm text-center bg-white/60 backdrop-blur-xl border border-gray-200 md:py-6 ">
                <div className="stat px-2 md:px-6">
                    <div className="stat-value  font-semibold text-3xl">5</div>
                    <div className="stat-title text-wrap text-[16px] md:text-lg">On Track</div>                  
                </div>              
            </section>

            <section className="stats shadow-sm text-center bg-white/60 backdrop-blur-xl border border-gray-200 md:py-6 ">
                 <div className="stat px-2 md:px-6">
                    <div className="stat-value  font-semibold text-3xl">9</div>
                    <div className="stat-title text-wrap text-[16px] md:text-lg">Need Attention</div>                   
                </div>
            </section>

            <section className="stats shadow text-center bg-white/60 backdrop-blur-xl border border-gray-200 md:py-6 ">
                <div className="stat px-2 md:px-6">
                    <div className="stat-value font-semibold text-3xl">12</div>
                    <div className="stat-desc  text-wrap text-[16px] md:text-lg">Interactions This Month</div>                   
                </div>
            </section>
        </div>
    );
};

export default Stats;