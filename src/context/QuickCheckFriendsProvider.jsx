import React, { createContext, useState } from 'react';

export const FriendsContext = createContext()


const QuickCheckFriendsProvider = ({children}) => {

        const [quickCheck, setQuickCheck] = useState([])

        const handleQuickCheckFriend = (expectedFriend, type)=>{
                
            const currentFriend = {...expectedFriend, type : type}
                // console.log(currentFriendInfo,  type)
    
            setQuickCheck([...quickCheck , currentFriend])
        }

        const data = {
                quickCheck, 
                setQuickCheck,
                handleQuickCheckFriend
        }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
};

export default QuickCheckFriendsProvider;