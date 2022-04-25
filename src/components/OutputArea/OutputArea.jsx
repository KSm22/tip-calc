import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import OutputTable from '../Table/OutputTable';
import TotalBilBarChart from '../Graph/TotalBilBarChart';
import PerPersonBarChart from '../Graph/PerPersonBarChart';

const OutputArea = ({billAmount, numberOfPeople, totalBillAmount, tipAmount, tipPerPerson, totalBillPerPerson}) => {
	return (
		<Tabs className="output-area">
			<div className="container">
				<TabList>
					<Tab>Data Table</Tab>
					<Tab>Total Bill</Tab>
					<Tab>Per Person</Tab>
				</TabList>

				<TabPanel>
					<OutputTable billAmount={billAmount} numberOfPeople={numberOfPeople}/>
				</TabPanel>

				<TabPanel>
					<TotalBilBarChart billAmount={billAmount} totalBillAmount={totalBillAmount} tipAmount={tipAmount}/>
				</TabPanel>

				<TabPanel>
					<PerPersonBarChart tipPerPerson={tipPerPerson} totalBillPerPerson={totalBillPerPerson}/>
				</TabPanel>
			</div>
		</Tabs>
	);
};

export default OutputArea;