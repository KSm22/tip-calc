import React, {useEffect, useState} from 'react';

import {
	setStateForTipAmount,
	setStateForTipPerPerson,
	setStateForTotalBillAmount, setStateForTotalBillPerPerson,
	validateNumbersFields,
} from '../../utils';

const Calc = ({setBA, setNoP, setTBA, setTA, setTPP, setTBPP}) => {
	const [billAmount, setBillAmount] = useState(0);
	const [tip, setTip] = useState(0);
	const [numberOfPeople, setNumberOfPeople] = useState(1);

	const [tipAmount, setTipAmount] = useState('0.00');
	const [totalBillAmount, setTotalBillAmount] = useState('0.00');
	const [tipPerPerson, setTipPerPerson] = useState('0.00');
	const [totalBillPerPerson, setTotalBillPerPerson] = useState('0.00');


	useEffect(() => {
		setStateForTipAmount(billAmount, tip, setTipAmount);
		setStateForTotalBillAmount(billAmount, totalBillAmount, tipAmount, setTotalBillAmount);
		setStateForTipPerPerson(tipAmount, numberOfPeople, setTipPerPerson);
		setStateForTotalBillPerPerson(totalBillAmount, numberOfPeople, setTotalBillPerPerson);

		setBA(+billAmount);
		setNoP(+numberOfPeople);
		setTBA(+totalBillAmount);
		setTA(+tipAmount);
		setTBPP(+totalBillPerPerson);
		setTPP(+tipPerPerson);
	}, [billAmount, tip, totalBillAmount, tipAmount, numberOfPeople, setBA, setNoP, setTBA, setTBPP, setTPP, setTA, totalBillPerPerson, tipPerPerson]);

	return (
		<section className="calc-container">

			<hr className="phat"/>

			<div className="calc-wrapper">
				<form className="calc-form">
					<div className="calc-form__field calc-form__field--before">
						<label>Bill Amount</label>
						<input type="text"
							   className="bill-amount"
							   value={billAmount}
							   onKeyPress={(event) => validateNumbersFields(event)}
							   onChange={(e) => {
								   setBillAmount(e.target.value);
							   }}/>
					</div>

					<div className="calc-form__field calc-form__field--before">
						<label>Tip %</label>
						<input type="text"
							   value={tip}
							   onKeyPress={(event) => validateNumbersFields(event)}
							   onChange={e => setTip(e.target.value)}/>
					</div>

					<div className="calc-form__field">
						<label>Number of People</label>
						<input type="text"
							   value={numberOfPeople}
							   onKeyPress={(event) => validateNumbersFields(event)}
							   onChange={e => setNumberOfPeople(e.target.value)}/>
					</div>
				</form>
			</div>

			<hr className="phat"/>

			<div className="calc-wrapper">
				<div className="calc-output-group">
					<div className="output">
						<label>Tip Amount</label>
						<div className="output__field">
							<div className="output-field__value">${tipAmount}</div>
						</div>
					</div>

					<div className="output">
						<label>Total Bill Amount</label>
						<div className="output__field">
							<div className="output-field__value">${totalBillAmount}</div>
						</div>
					</div>

					<div className="output">
						<label>Tip per Person</label>
						<div className="output__field">
							<div className="output-field__value">${tipPerPerson}</div>
						</div>
					</div>

					<div className="output">
						<label>Total Bill per Person</label>
						<div className="output-field">
							<div className="output-field__value">${totalBillPerPerson}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Calc;