import React, { useContext } from 'react';
import { FriendsContext } from '../../context/QuickCheckFriendsProvider';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import NoStatsFound from '../../components/statsPage/NoStatsFound';
// import useFriends from '../../hooks/useFriends';

const StatsPage = () => {

    // const {friends, loading} = useFriends
    const {quickCheck} = useContext(FriendsContext) //custom Context

        const count = [
            { name: 'text', value: 0, fill: '#00C49F' },
            { name: 'call', value: 0, fill: '#0088FE' },
            { name: 'video', value: 0, fill: '#FFBB28' },
        
        ]
        for(const singleData of quickCheck){
            
            const countRow = count.findIndex(d => d.name == singleData.type)
        
            count[countRow].value++;
        }
        

        console.log(count);
        console.log( 'FriendsContext, quickCheck', quickCheck )


        const isAllZero = count.every(d => d.value === 0);

    return (
        <div className='container mx-auto px-4 py-10 md:p-16 lg:p-20 flex justify-center flex-col gap-8'>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Friendship Analytics</h2>

         {/* for pieChart and data not found  */}
            { isAllZero ? 
                <NoStatsFound></NoStatsFound> :

                <div className='card space-y-6 p-8 w-full shadow bg-white/60 backdrop-blur-xl border border-gray-200 flex flex-col justify-center'>
                    <p className='text-xl font-medium'>By Interaction Type</p>
                
                            
                    <PieChart className='mx-auto' style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
                                        <Pie
                                            data={count}
                                            innerRadius="80%"
                                            outerRadius="100%"
                                            // Corner radius is the rounded edge of each pie slice
                                            cornerRadius="50%"
                                            fill="#8884d8"
                                            // padding angle is the gap between each pie slice
                                            paddingAngle={5}
                                            dataKey="value"
                                            isAnimationActive={true}
                                        />
                                    <Legend></Legend>
                                    <Tooltip></Tooltip>
                        </PieChart>
                 
               </div>
            
            }

        </div>
    );
};

export default StatsPage;