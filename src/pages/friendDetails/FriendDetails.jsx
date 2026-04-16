import React, { useState } from 'react';

import { useLoaderData, useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';

import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'

import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { BiBox } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loading from '../../components/ui/Loading';

const FriendDetails = () => {
    
    const {Id} = useParams()
    // const friendsArray = useLoaderData()

    // const expectedFriend = friendsArray.find(friend => friend.id === Number(Id))
    // console.log(expectedFriend)

    const {friends, loading} = useFriends()
    const expectedFriend = friends.find(friend => friend.id === Number(Id))
    // console.log(Id, 'useParams')
    // console.log(friendsArray, 'useLoaderData')

    const [quickCheck, setQuickCheck] = useState([])
    const handleQuick = (currentFriendInfo, type)=>{
         
    const data = {...currentFriendInfo, type : type}
        // console.log(currentFriendInfo,  type)

        setQuickCheck([...quickCheck , data])
    }
    console.log(quickCheck, 'quickCheck')

    return ( 
        loading? 
            <Loading></Loading> :
            <div className='bg-[#f8fafcFF]'>

                <div className=' container mx-auto gap-6 px-4 py-10 md:px-0 md:py-0 md:p-16 lg:p-20 flex flex-col lg:flex-row '>

                    {/* right container  */}
                        <section className='md:w-[35%] space-y-4'>

                            <div className="card bg-white/50 backdrop-blur-xl border border-gray-200  shadow-lg pt-10">
                                <figure className=''>
                                    <img
                                    src={expectedFriend.picture}  className='h-25 w-25 rounded-full object-contain border border-gray-200'/>
                                </figure>

                                <div className="card-body justify-center items-center space-y-2">

                                    <h2 className="card-title">
                                    {expectedFriend.name}
                                    </h2>


                                    <div className={`
                                            badge font-medium  items-center p-4 rounded-4xl text-white
                                            ${expectedFriend.status === 'on-track' && ('bg-[#244d3fFF]')}
                                            ${expectedFriend.status === 'almost-due' && ('badge-warning')}
                                            ${expectedFriend.status === 'over-due' && ('badge-error ')}
                                        
                                        `} >
                                            
                                        {expectedFriend.status}
                                        
                                    </div>
                                    
                                    <div className="space-x-2">
                                        {
                                            expectedFriend.tags.map((tag, ind)=> <span key={ind} className='badge badge-outline/20 text-[#244d3fFF] font-medium bg-[#244d3fFF]/20 items-center p-4 rounded-4xl'>{tag}</span>)
                                        }
                                    </div>
                                    
                                    <p className='text-[#64748bFF] text-lg text-center'>{expectedFriend.bio}</p>
                                    <p className='text-[#64748bFF]'>{expectedFriend.email}</p>





                                </div>
                                    
                            </div>

                            <p className='btn w-full card bg-white/50 hover:bg-[#f8fafcFF]/50 backdrop-blur-xl border border-gray-200  shadow-lg flex flex-row items-center justify-center'><HiOutlineBellSnooze className='h-4 w-4'/> <span>Snooze 2 weeks</span></p>

                            <p className='btn w-full card bg-white/50 hover:bg-[#f8fafcFF]/50 backdrop-blur-xl border border-gray-200  shadow-lg flex flex-row items-center justify-center'><BiBox className='h-4 w-4'/> <span>Archive</span></p>

                            <p className='btn w-full card bg-white/50 hover:bg-[#f8fafcFF]/50 backdrop-blur-xl border border-gray-200  shadow-lg flex flex-row items-center justify-center text-red-400'><RiDeleteBin6Line className='h-4 w-4'/><span> Delete</span></p>

                            
                        </section>



                    {/* left container  */}
                        <section className='flex-1 space-y-6'>
                            
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6  '>
                                
                                <section className="stats shadow text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                                    <div className="stat p-0 py-8">
                                        <div className="stat-value font-semibold text-3xl">{expectedFriend.days_since_contact}</div>
                                        <div className="stat-title text-wrap text-lg">Days Since Contact</div>      
                                    </div>
                                </section>

                                <section className="stats shadow-sm text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                                    <div className="stat p-0 py-8">
                                        <div className="stat-value font-semibold text-3xl">{expectedFriend.goal}</div>
                                        <div className="stat-title text-wrap text-lg">Goal (Days)</div>                  
                                    </div>              
                                </section>

                                <section className="stats shadow-sm text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                                    <div className="stat p-0 py-8">
                                        <div className="stat-value font-semibold text-3xl">{expectedFriend.next_due_date}</div>
                                        <div className="stat-title text-wrap text-lg">next_due_date</div>                   
                                    </div>
                                </section>

                            </div>

                            
                            <div className="stats w-full shadow text-center bg-white/60 backdrop-blur-xl border border-gray-200 ">
                                <section className="stat text-start font-normal px-6 py-8 space-y-4">
                                        <div className="stat-title text-[16px] md:text-2xl font-medium flex justify-between items-center">
                                            <span>Relationship Goal</span>
                                            <button className='btn'>Edit</button>
                                        </div>
                                        <div className="stat-title text-[16px] md:text-lg font-normal">Connect every <span className='font-medium text-lg md:text-xl'>{expectedFriend.goal} days</span></div>      
                                </section>
                            </div>

                    {/* call, audio, video btn card*/}
                            <div className='stats w-full shadow bg-white/60 backdrop-blur-xl border border-gray-200 flex flex-col px-6 py-10 space-y-5'>
                                <h3 className='text-xl font-medium text-[#244d3fFF]'>Quick Check-In</h3>

                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6  '>
                                    
                                    <section 
                                    className="stats shadow text-center bg-[#f8fafcFF]/50 backdrop-blur-xl border border-gray-200 cursor-pointer hover:scale-103 transition"
                                     onClick={()=>handleQuick(expectedFriend, 'call')}>
                                        <div className="stat p-0 py-8 space-y-2">
                                            <div className="stat-value">
                                                <img src={callImg} alt="call image" className='mx-auto h-8 w-8'/>
                                            </div>
                                            <div className="stat-title text-wrap text-lg">Call</div>      
                                        </div>
                                    </section>

                                    <section 
                                    className="stats shadow-sm text-center  bg-[#f8fafcFF]/50 backdrop-blur-xl border border-gray-200 cursor-pointer hover:scale-103 transition" 
                                    onClick={()=>handleQuick(expectedFriend, 'text')}>
                                        <div className="stat p-0 py-8 space-y-2">
                                            <div className="stat-value font-semibold text-3xl"> <img src={textImg} alt="call image" className='mx-auto h-8 w-8'/></div>
                                            <div className="stat-title text-wrap text-lg">Text</div>                  
                                        </div>              
                                    </section>

                                    <section 
                                    className="stats shadow-sm text-center  bg-[#f8fafcFF]/50 backdrop-blur-xl border border-gray-200 cursor-pointer hover:scale-103 transition"
                                    onClick={()=>handleQuick(expectedFriend, 'video')}>
                                        <div className="stat p-0 py-8 space-y-2">
                                            <div className="stat-value font-semibold text-3xl"> <img src={videoImg} alt="call image" className='mx-auto h-8 w-8'/></div>
                                            <div className="stat-title text-wrap text-lg">Video</div>                   
                                        </div>
                                    </section>

                                </div>
                        
                            </div>
                        </section>


                    
                </div>

            </div>
    );
};

export default FriendDetails;