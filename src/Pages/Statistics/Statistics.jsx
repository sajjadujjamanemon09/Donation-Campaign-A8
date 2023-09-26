import React from 'react';
import Chart from 'react-apexcharts';

const Statistics = () => {
  const totalDonations = 12;
  const collectDonations = JSON.parse(localStorage.getItem('donate'))?.length || 0;

  const chartData = [collectDonations, totalDonations - collectDonations];

  const options = {
    labels: ['Your Donation', 'Total Donation'],
    colors: ['#00C49F', '#FF444A'],
    legend: {
      position: 'bottom',
    },
  };

  return (
    <React.Fragment>
      <div className='flex items-center justify-center h-[100vh] w-full'>
        <Chart
          type='pie'
          width={330}
          height={2500}
          series={chartData}
          options={options}
        />
      </div>
    </React.Fragment>
  );
}

export default Statistics;
