import React from 'react';

const Stats = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 p-4  '>
            
            <section className="stats shadow text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                <div className="stat">
                    <div className="stat-value">14</div>
                    <div className="stat-title text-wrap">Total Friends</div>      
                </div>
            </section>

            <section className="stats shadow-sm text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                <div className="stat">
                    <div className="stat-value">4</div>
                    <div className="stat-title text-wrap">On Track</div>                  
                </div>              
            </section>

            <section className="stats shadow-sm text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                 <div className="stat">
                    <div className="stat-value">6</div>
                    <div className="stat-title text-wrap">Need Attention</div>                   
                </div>
            </section>

            <section className="stats shadow text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                <div className="stat ">
                    <div className="stat-value">12</div>
                    <div className="stat-desc  text-wrap">Interactions This Month</div>                   
                </div>
            </section>
        </div>
    );
};

export default Stats;