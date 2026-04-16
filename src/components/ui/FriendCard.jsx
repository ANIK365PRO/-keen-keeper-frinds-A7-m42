import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    // console.log(friend, 'FriendCard')
    return (
        <Link to={`/friendDetails/${friend.id}`}>
            
             <div className="card bg-white/50 backdrop-blur-xl border border-gray-200  shadow-lg pt-10">
            <figure className=''>
                <img
                src={friend.picture}  className='h-25 w-25 rounded-full object-contain border border-gray-200'/>
            </figure>
            <div className="card-body justify-center items-center space-y-2">
                <h2 className="card-title">
                {friend.name}
                </h2>

                <p><small className='font-medium text-sm text-[#64748bFF]'>{friend.days_since_contact}d ago</small></p>

                <div className="space-x-2">
                    {
                        friend.tags.map((tag, ind)=> <span key={ind} className='badge badge-outline/20 text-[#244d3fFF] font-medium bg-[#244d3fFF]/20 items-center p-4 rounded-4xl'>{tag}</span>)
                    }
                </div>
                
                <div className={`
                        badge font-medium  items-center p-4 rounded-4xl text-white
                        ${friend.status === 'on-track' && ('bg-[#244d3fFF]')}
                        ${friend.status === 'almost-due' && ('badge-warning')}
                        ${friend.status === 'over-due' && ('badge-error ')}
                    
                    `}
                    
                    >{friend.status}</div>

            </div>
            </div>
        </Link >
    );
};

export default FriendCard;