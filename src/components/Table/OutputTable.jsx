import React from 'react';

const OutputTable = ({billAmount, numberOfPeople}) => {

	const returnNewTipAmount = (tip, billAmount) => {
		return (+billAmount * (+tip / 100)).toFixed(2);
	};

	const returnNewTotalBillAmount = (tipAmount) => {
		return (+billAmount + +tipAmount).toFixed(2);
	};

	const returnNewTipPerPerson = (tipAmount) => {
		return (+tipAmount / +numberOfPeople).toFixed(2);
	};

	const returnNewTotalBillPerPerson = (totalBillAmount) => {
		return (+totalBillAmount / +numberOfPeople).toFixed(2);
	}


	return (
		<table id="output-table" className="output-table">
			<tbody>
				<tr className="output-table__header">
					<th>Tip Percentage</th>
					<th>Tip Amount</th>
					<th>Total Bill Amount</th>
					<th>Tip Per Person</th>
					<th>Total Bill Per Person</th>
					<th>Service Scale</th>
				</tr>

				<tr>
					<td data-label="Tip Percentage">5%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(5, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(5, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(5, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(5, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Very Poor</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">10%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(10, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(10, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(10, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(10, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Very Poor</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">13%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(13, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(13, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(13, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(13, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Poor</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">15%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(15, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(15, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(15, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(15, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Average</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">18%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(18, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(18, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(18, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(18, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Average</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">20%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(20, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(20, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(20, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(20, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Above Average</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">23%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(23, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(23, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(23, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(23, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Very Good</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">25%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(25, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(25, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(25, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(25, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Excellent</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">28%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(28, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(28, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(28, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(28, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Excellent</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">30%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(30, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(30, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(30, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(30, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Out of This World</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">33%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(33, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(33, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(33, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(33, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Out of This World</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">35%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(35, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(35, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(35, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(35, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Indescribable</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">38%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(38, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(38, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(38, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(38, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Indescribable</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">40%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(40, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(40, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(40, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(40, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">You’re Probably Related</td>
				</tr>

				<tr>
					<td data-label="Tip Percentage">50%</td>
					<td data-label="Tip Amount">${returnNewTipAmount(50, billAmount)}</td>
					<td data-label="Total Bill Amount">${returnNewTotalBillAmount(returnNewTipAmount(50, billAmount))}</td>
					<td data-label="Tip Per Person">${returnNewTipPerPerson(returnNewTipAmount(50, billAmount), numberOfPeople)}</td>
					<td data-label="Total Bill Per Person">${returnNewTotalBillPerPerson(returnNewTotalBillAmount(returnNewTipAmount(50, billAmount)), numberOfPeople)}</td>
					<td data-label="Service Scale">Ok, You’re Related</td>
				</tr>
			</tbody>
		</table>
	);
};

export default OutputTable;