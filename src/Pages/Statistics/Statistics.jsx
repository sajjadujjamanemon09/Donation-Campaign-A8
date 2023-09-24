import { PieChart, Pie } from 'recharts';



const Statistics = () => {

    const data = [
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: 300 },
      ];

    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <PieChart width={730} height={250}>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" />
            </PieChart>
        </div>
    );
};

export default Statistics;