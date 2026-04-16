import React, { useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';
import useFriends from '../../hooks/useFriends';
import Loading from '../ui/Loading';



const Friends = () => {

    // const [friends, setFriends] = useState([])
    // const [loading, setLoading] = useState(true)


    // useEffect( ()=>{

    //     const fetchFriends = async() => {
    //         const res = await fetch('/FriendsData.json');
    //         const data = await res.json()

        
    //         setTimeout(()=>{
    //             // console.log(data)
    //             setFriends(data)
    //             setLoading(false)

    //         }, 2000)

    //     }


    //     fetchFriends()
    // },[])

    
    const {friends, loading} = useFriends()
    // console.log(friends, loading)

   
    

    return ( loading ? 

            <Loading></Loading> :

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 items-center justify-center'>
                {

                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                    
                }
            
            </div>
    );
};

export default Friends;