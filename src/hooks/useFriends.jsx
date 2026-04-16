import React, { useEffect, useState } from 'react';

const useFriends = () => {

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


    return {friends, loading}
};

export default useFriends;