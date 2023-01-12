import React from 'react'
import { Line } from 'react-chartjs-2';

const LineGraph = () => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Main Income',
                backgroundColor: 'black',
                borderColor: 'black',
                data: [10, 0, 25, 30, 20, 45, 50],
            },
            {
                label: 'Side Income 1',
                backgroundColor: 'mediumPurple',
                borderColor: 'mediumPurple',
                data: [5, 14, 35, 25, 31, 20, 70],
            },
            {
                label: 'Side Income 2',
                backgroundColor: 'pink',
                borderColor: 'pink',
                data: [30, 30, 30, 60, 30, 30, 30],
            },
        ],
    };
  return (
    <div style={{ width: '60%' }}>
        <h1>Line Chart</h1>
        <Line data={data} />
    </div>
  )
}

export default LineGraph;