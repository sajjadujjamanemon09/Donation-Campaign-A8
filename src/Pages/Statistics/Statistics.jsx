import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
  const data = [
    { name: 'total', value: 700, fill: '#FF444A' },
    { name: 'added', value: 300, fill: '#00C49F' },
  ];

  return (
    <div className='mt-20'>
      <div className='flex flex-col items-center'>
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='flex justify-center items-center gap-10 font-medium'>
        <h2 className='text-center'>Your Donation</h2>
        <h2 className='text-center'>Total Donation</h2>
      </div>
    </div>
  );
};

export default Statistics;
