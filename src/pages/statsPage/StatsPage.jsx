import React, { useContext } from 'react';
import { FriendsContext } from '../../context/QuickCheckFriendsProvider';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
// import useFriends from '../../hooks/useFriends';

const StatsPage = () => {

    // const {friends, loading} = useFriends
    const {quickCheck} = useContext(FriendsContext) //custom Context

        const count = [
            {name: 'call', value : 0},
            {name: 'text', value: 0},
            {name: 'video', value: 0},
        ]
        for(const singleData of quickCheck){
            
            const countRow = count.findIndex(d => d.name == singleData.type)
        
            count[countRow].value++;
        }
        

        console.log(count);
        console.log( 'FriendsContext, quickCheck', quickCheck )


        const data = [
            { name: 'Text', value: 300, fill: '#00C49F' },
            { name: 'Calls', value: 400, fill: '#0088FE' },
            { name: 'Video', value: 300, fill: '#FFBB28' },
            
        ];
         const isAllZero = count.every(d => d.value === 0);

    return (
        <div className='container mx-auto px-4 py-10 md:p-16 lg:p-20 flex justify-center'>

       
            {
            isAllZero ?
                <p>No data</p> : 
                 <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
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
            }
        </div>
    );
};

export default StatsPage;