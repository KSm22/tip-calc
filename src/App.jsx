import React, {useState} from 'react';

import Calc from './components/Calc/Calc';
import OutputArea from './components/OutputArea/OutputArea';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import SiteHeader from './components/Header/SiteHeader';

function App() {
	const [billAmount, setBillAmount] = useState(0);
	const [numberOfPeople, setNumberOfPeople] = useState(1);
	const [totalBillAmount, setTotalBillAmount] = useState(0);
	const [tipAmount, setTipAmount] = useState(0);
	const [tipPerPerson, setTipPerPerson] = useState(0);
	const [totalBillPerPerson, setTotalBillPerPerson] = useState(0);

	return (
		<div className="App">
			<SiteHeader/>
			<main>
				<Calc setBA={setBillAmount} setNoP={setNumberOfPeople} setTBA={setTotalBillAmount} setTA={setTipAmount} setTPP={setTipPerPerson} setTBPP={setTotalBillPerPerson}/>
				<OutputArea billAmount={billAmount} numberOfPeople={numberOfPeople} totalBillAmount={totalBillAmount} tipAmount={tipAmount} totalBillPerPerson={totalBillPerPerson} tipPerPerson={tipPerPerson}/>
				<hr className="phat"/>
				<AboutPage/>
				<Footer/>
			</main>
		</div>
	);
}

export default App;
