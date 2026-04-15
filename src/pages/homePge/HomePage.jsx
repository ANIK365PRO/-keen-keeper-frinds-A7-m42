import React from 'react';
import Stats from '../../components/homePage/Stats';
import Friends from '../../components/homePage/Friends';

const HomePage = () => {
    return (
       <div className='py-10 md:py-16 lg:py-20 space-y-6 md:space-y-10 '>

        {/* banner title section  */}
            <section className='text-center w-[80%] md:w-[60%] mx-auto  space-y-4 lg:space-x-5'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold md:font-extrabold'>Friends to keep close in your life</h2>
                <p className='text-[#64748bFF] w-[90%] md:w-[70%] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>

                <button className='btn bg-[#244d3fFF] text-white'>+ Add a friend</button>
            </section>

        {/* action section  */}
            <section className='container mx-auto'>
                <Stats></Stats>
            </section>

        {/* friends container  */}
            <section className='container mx-auto '>
                <Friends></Friends>
            </section>
            
       </div>
    );
};

export default HomePage;