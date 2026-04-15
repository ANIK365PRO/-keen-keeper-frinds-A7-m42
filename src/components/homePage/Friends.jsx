import React, { useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';

// const friendsPromise = fetch('/FriendsData.json').then(res=>res.json())

const Friends = () => {
    // const friendsArray = use(friendsPromise)
    // console.log(friendsArray)

    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect( ()=>{

        const fetchFriends = async() => {
            const res = await fetch('/FriendsData.json');
            const data = await res.json()

        
            setTimeout(()=>{
                // console.log(data)
                setFriends(data)
                setLoading(false)

            }, 2000)

        }


        fetchFriends()
    },[])
    
    console.log(friends, loading)

   
    

    return ( loading ? 

            (<div className='font-bold text-7xl text-center'> LOADING..........</div>) :

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 items-center justify-center'>
                {

                    friends.slice(0,8).map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                    
                }
            
            </div>
    );
};

export default Friends;