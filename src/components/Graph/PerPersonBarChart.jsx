import React from 'react';
import {Bar, Chart} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const PerPersonBarChart = ({tipPerPerson, totalBillPerPerson}) => {
	return (
		<div className="bar-chart-wrapper">
			<Chart
				className="bar-chart"
				data={
					{
						labels: [
							'Per Person',
						],
						datasets: [
							{
								type: 'bar',
								label: 'Tip Per Person',
								backgroundColor: '#2dc36a',
								borderColor: '#2dc36a',
								data: [tipPerPerson],
							},
							{
								type: 'bar',
								label: 'Total Bill Per Person',
								backgroundColor: '#1d8145',
								borderColor: '#1d8145',
								data: [totalBillPerPerson],
							},
						],
					}
				}
				options={{
					responsive: true,
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

export default PerPersonBarChart;