import { FaChartLine, FaHome } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { NavLink } from 'react-router';

import logoImage from '../../assets/logo.png'

const NavBar = () => {
   

    const links = (
        <>

        <li><NavLink to={"/"} 
            className={({isActive}) => `font-semibold mr-1 text-center ${isActive && ' bg-[#244d3fFF] text-white'}`}><FaHome /> Home</NavLink></li>
        <li><NavLink to={"/timeLine"} 
            className={({isActive}) => `font-semibold mr-1 text-center ${isActive && ' bg-[#244d3fFF] text-white'}`}><MdOutlineWatchLater /> Timeline</NavLink></li>
        <li><NavLink to={"/stats"} 
            className={({isActive}) => `font-semibold mr-1 text-center ${isActive && ' bg-[#244d3fFF] text-white'}`}><FaChartLine /> Stats</NavLink></li>

        
        </>
    )


    return (
        <nav className='bg-base-100 shadow-sm p-0 sticky top-0 z-10'>
            <div className="navbar container mx-auto flex justify-between items-center p-0">

                <div className="ml-4 flex-1">
                    <img src={logoImage} alt="logo Image" />
                </div>

                <div className="flex p-0">
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-auto shadow">
                        <ul className="card-body menu">
                           
                           {links}
                           
                        </ul>
                    </div>
                    </div>

                     <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;