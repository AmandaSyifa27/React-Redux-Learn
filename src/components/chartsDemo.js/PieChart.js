import React from 'react'
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    
    const data = {
        labels : ['OnePiece', 'Naruto', 'Jujutsu Kaisen', 'Tokyo Revenger', 'Kimetsu No Yaiba'],
        datasets: [
            {
                label: "Favorite Anime",
                data: [50, 25, 15, 20, 23],
                backgroundColor: [
                    'red',
                    'orange',
                    '#746AB0',
                    'gold',
                    'green',
                ],
                hoverOffset: 10,
            },
        ],
    };
  return (
    <div style={{ width: '40%' }}>
        <h1>Pie Chart</h1>
        <Pie data={data} />
    </div>
  )
};

export default PieChart;