export const validateNumbersFields = (evt) => {
	const theEvent = evt || window.event;
	let key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	const regex = /[0-9]|\./;
	if( !regex.test(key) ) {
		theEvent.returnValue = false;
		if(theEvent.preventDefault) theEvent.preventDefault();
	}
};

export const setStateForTipAmount = (billAmount, tip, stateSetter) => {
	if (+billAmount && +tip) {
		stateSetter(((+billAmount) * ((+tip) / 100)).toFixed(2));
	}
};

export const setStateForTotalBillAmount = (billAmount, totalBillAmount, tipAmount, stateSetter) => {
	if (billAmount && totalBillAmount) {
		stateSetter(((+billAmount) + (+tipAmount)).toFixed(2));
	}
};

export const setStateForTipPerPerson = (tipAmount, numberOfPeople, stateSetter) => {
	stateSetter((+tipAmount / +numberOfPeople).toFixed(2));
};

export const setStateForTotalBillPerPerson = (totalBillAmount, numberOfPeople, stateSetter) => {
	stateSetter((+totalBillAmount / +numberOfPeople).toFixed(2));
};