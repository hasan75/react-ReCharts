import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = () => {
    const data = [
        {
          name: 'Company A',
          Mobile: 4000,
          Computer: 2400,
          Laptop: 2400,
        },
        {
          name: 'Company B',
          Mobile: 3000,
          Computer: 1398,
          Laptop: 2210,
        },
        {
          name: 'Company C',
          Mobile: 2000,
          Computer: 9800,
          Laptop: 2290,
        },
        {
          name: 'Company D',
          Mobile: 2780,
          Computer: 3908,
          Laptop: 2000,
        },
        {
          name: 'Company E',
          Mobile: 1890,
          Computer: 4800,
          Laptop: 2181,
        },
        {
          name: 'Company F',
          Mobile: 2390,
          Computer: 3800,
          Laptop: 2500,
        },
        {
          name: 'Company G',
          Mobile: 3490,
          Computer: 4300,
          Laptop: 2100,
        },
      ];
    return (
        <AreaChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 100,
            right: 70,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Mobile" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Computer" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Laptop" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
    );
};

export default MyAreaChart;