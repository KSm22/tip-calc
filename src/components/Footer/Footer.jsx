import React from 'react';

import logo from '../../static/images/iq.png';
import {FaFacebookF, FaTwitter, FaGooglePlusG} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer-wrapper">
				<div className="footer__group">
					<a id="footer-logo" href="/">
						<img src={logo} alt="site logo"/>
					</a>

					<div className="footer__legal-links">
						<p>
							<a  href="/">
								Terms &amp; Conditions
							</a>
							<span className="separator">/</span>
							<a href="/">
								Privacy Policy
							</a>
						</p>
						<p>Copyright 2016, "All Rights Reserved."</p>
					</div>
				</div>

				<div className="footer__group">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/">Blog</a></li>
						<li><a href="/">The Calculators</a></li>
						<li><a href="/">Contact Us</a></li>
						<li><a href="/">About Us</a></li>
					</ul>
				</div>

				<div className="footer__group social-group">
					<ul className="no-list-style double-space">
						<li>
							<a href="/">
								<FaFacebookF/>
								<span>Facebook</span>
							</a>
						</li>
						<li>
							<a href="/">
								<FaTwitter/>
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a href="/">
								<FaGooglePlusG className="google-plus"/>
								<span>Google +</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__group">
					<p className="text-center">Get Important Updates By Sharing Your Email Address</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;