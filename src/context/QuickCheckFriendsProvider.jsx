import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendsContext = createContext()


const QuickCheckFriendsProvider = ({children}) => {

        const [quickCheck, setQuickCheck] = useState([])

        const handleQuickCheckFriend = (expectedFriend, type)=>{
                
            const currentFriend = {...expectedFriend, type : type}
                // console.log(currentFriendInfo,  type)
    
            setQuickCheck([...quickCheck , currentFriend])
            toast.success(`${type}, with ${expectedFriend.name} !`)
            
        }

        const data = {
                quickCheck, 
                setQuickCheck,
                handleQuickCheckFriend
        }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
};

export default QuickCheckFriendsProvider;