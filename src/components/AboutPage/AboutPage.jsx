import React from 'react';

import guideImage from '../../static/images/guide.png';
import faqImage from '../../static/images/faq-img.jpg';

const AboutPage = () => {
	return (
		<div className="about-page-wrapper">
			<div className="container">
				<section className="about-page">
					<h1>
						Tip Calculator
					</h1>
					<p>
						This <a href="/">tip calculator app</a> is for those that need to calculate a tip for dinner, an uber, a taxi, a hair stylist or pretty much anything that you need to tip someone for.  This tip calculator is also mobile friendly so you can use it on the go when you are out with friends or traveling for work.
					</p>

					<p>
						This tip calculator asks you to enter your bill amount, your tip percentage, and the number of people in your dinner party.  From there, it will calculate your total tip amount, your total bill amount, the tip per person(if you are splitting the tab), and finally the total bill per person which would include your tip amount and bill amount added together.
					</p>

					<p>
						If you want more information, we provide a mobile friendly table that shares what your tip amount, total bill, tip per person, and total bill per person would be at different tip percentages ranging from five percent all the way up to fifty percent.
					</p>

					<p>
						Not everyone needs a calculator to calculate a tip, but it can be useful in order to remove the possibility of tipping the wrong amount.  Wouldn't you hate to leave a tip of five percent when you thought you were leaving a tip of twenty percent?  This error is all too common so let IQ Calculators help you.  We hope you find this tip calculator useful in all your culinary adventures as well as any other places a tip is required!
					</p>

					<h3>Tipping Calculator Guide</h3>

					<p style={{maxWidth: '500px', margin: '0 auto'}}>
						<img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%'}} src={guideImage} alt="Tipping Guide" width="500"/>
					</p>

					<h3>
						<span style={{textDecoration: 'underline'}}>
							<strong>
								<a href="/">Tip Calculator</a> Glossary
							</strong>
						</span>
					</h3>

					<p><strong>Bill Amount -&nbsp;</strong>The amount of your bill for dinner, uber, hairstylist, or whatever the case may be.</p>
					<p><strong>Tip Percentage -&nbsp;</strong>The amount you intend to tip your waiter or waitress. &nbsp;</p>
					<p><strong>Number of People -&nbsp;</strong>The number of people in your dinner party that you plan on splitting the tip and bill with</p>
					<p><strong>Tip Amount -&nbsp;</strong>Based on your info entered above, the amount of calculated tip.</p>
					<p><strong>Total Bill Amount -&nbsp;</strong>Your bill amount plus your tip amount. &nbsp;</p>
					<p><strong>Total Bill Per Person -&nbsp;</strong>Your total bill divided by the number of people in your party.</p>

				</section>
			</div>

			<hr className="path"/>

			<div className="container">
				<section className="faq">
					<h2 style={{textAlign: 'left'}}>Tip Calculator&nbsp;FAQs</h2>

					<h3 style={{textAlign: 'left'}}>Should I Leave a Tip at a Buffet? &nbsp;</h3>
					<p style={{textAlign: 'left'}}>This depends on the buffet. &nbsp;If your wait staff is refilling drinks and such, then yes, it is proper to leave a tip of 10 percent and up. &nbsp;If your server isn't waiting on you, then it is still good to leave a small tip($1 to $2 per person) depending on the number of people in your party for them clearing the table while you are there and for after you are gone. &nbsp;</p>

					<h3 style={{textAlign: 'left'}}>How to Leave a Tip For a Bad Waiter?</h3>
					<p style={{textAlign: 'left'}}>This is a topic that receives spirited debate among restaurant patrons, however, here at IQ Calculators, we believe that a tip should never be left in a rude or degrading manner. &nbsp;No one knows what another person is dealing with or going through in their life and bad service is not the end of the world. &nbsp;We recommend that whatever you choose to do, you do it in a caring and compassionate manner in such a way that encourages the wait staff...not discourages. &nbsp;There are plenty of videos on Youtube that show very rude ways of leaving a tip for a bad waiter. &nbsp;This is wrong.&nbsp;</p>

					<h3 style={{textAlign: 'left'}}>Should I Leave a Tip at a Bed and Breakfast?</h3>
					<p style={{textAlign: 'left'}}>If the bed and breakfast is being run by the owners, then leaving a tip is not recommended. &nbsp;However, if the bed and breakfast is being run by servers and/or wait staff, then it may be proper to leave a tip. &nbsp;However, to tip room service is not the same as tipping a waiter where tips are their primary source of wages. &nbsp;Room service gets compensated for the work they are doing and tips are just extra.</p>

					<h3 style={{textAlign: 'left'}}>How Do I Leave a Tip?</h3>
					<p>If you are billed via a receipt, then leave the tip on the receipt. &nbsp;An example of this would be at a restaurant. &nbsp;If you are billed in some other manner where it's not possible to leave a tip on the receipt, then you will have to leave cash. &nbsp;Along with cash, we encourage everyone to leave a note sharing with the person how much you appreciated their service. &nbsp;Waiting on people is hard and an encouraging note can go a long way. &nbsp;</p>

					<h3 style={{textAlign: 'left'}}>How Much Should I Tip Movers?</h3>
					<p>This depends on the difficulty of the move. &nbsp;Are there a lot of big items and did the move require them to go up and down stairs etc.? &nbsp;If your movers had a good attitude and were easy to work with, we would recommend at least a tip of $20 per mover for a full days move. &nbsp;It's quite possible that you believe your movers deserve more than $20/person for a tip and for that, we say way to be a good tipper. &nbsp;</p>

					<h3 style={{textAlign: 'left'}}>How Much Should I Tip Uber Drivers?</h3>
					<p>You should tip Uber Drivers at least by the amount that you would normally tip a taxi driver. &nbsp;To put this into numbers, 15 to 20%, depending on the service, is recommended.&nbsp;</p>

					<h3 style={{textAlign: 'left'}}>How Much Should I <a title="">Tip</a>&nbsp;a Hair Stylist?</h3>
					<p>People normally find a hair stylist that they like and continue to go to them over and over again. &nbsp;Because there is a relationship that develops, we find it would be difficult to leave less than a 15 to 20% tip with your hairstylist. &nbsp;It's also nice to leave a little bit more around the holidays. &nbsp;</p>
					<p>
						<img style={{display: 'block'}} id="faq-img" src={faqImage} alt=""/>
					</p>
				</section>
			</div>
		</div>
	);
};

export default AboutPage;