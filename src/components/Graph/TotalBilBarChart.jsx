import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const TotalBilBarChart = ({billAmount, totalBillAmount, tipAmount}) => {
	return (
		<div className="bar-chart-wrapper">
			<Bar
				className="bar-chart"
				data={
					{
						labels: [
							'Total Bill',
						],
						datasets: [
							{
								label: 'Bill Amount',
								backgroundColor: '#2dc36a',
								borderColor: '#2dc36a',
								data: [billAmount],
							},
							{
								label: 'Total Bill Amount',
								backgroundColor: '#1d8145',
								borderColor: '#1d8145',
								data: [totalBillAmount],
							},
							{
								label: 'Tip Amount',
								backgroundColor: '#30ea7a',
								borderColor: '#30ea7a',
								data: [tipAmount],
							},

						],
					}
				}
				options={{
					maintainAspectRatio: false,
					plugins: {
						legend: {
							position: 'left',
						},
					},
				}}
				width={400}
			/>
		</div>
	);
};

export default TotalBilBarChart;