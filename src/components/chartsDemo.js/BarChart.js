import React from 'react'
import * as Utils from '../../Utils';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    const labels = Utils.months({ count: 8 });
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 75, 80, 40, 34, 50, 55, 90],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(74, 20, 140, 0.2)",
                    'rgba(200, 0, 0, 0.2)',
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
					"rgb(153, 102, 255)",
					"rgb(84, 110, 122)",
                    'rgb(200, 0, 0)',
                ],
                borderWidth: 1,
            },
            {
                label: 'My Second Dataset',
                data: [65, 75, 80, 40, 34, 50, 55, 90],
                backgroundColor: [
                    "rgba(99,  255,132, 0.2)",
					"rgba(159, 255, 64, 0.2)",
					"rgba(205, 255, 86, 0.2)",
					"rgba(192, 75, 192, 0.2)",
					"rgba(162, 54, 235, 0.2)",
					"rgba(102, 153, 255, 0.2)",
					"rgba(203, 201, 207, 0.2)",
                    'rgba(0, 200, 0, 0.2)',
                ],
                borderColor: [
                    "rgb(99,  255,132)",
					"rgb(159, 255, 64)",
					"rgb(205, 255, 86)",
					"rgb(192, 75, 192)",
					"rgb(162, 54, 235)",
					"rgb(102, 153, 255)",
					"rgb(203, 201, 207)",
                    'rgb(0 200, 0)',
                ],
                borderWidth: 1,
            },
        ],
    };
  return (
    <div style={{ width: '60%' }}>
        <h1>Bar Chart</h1>
        <Bar data={data} />
    </div>
  )
};

export default BarChart;