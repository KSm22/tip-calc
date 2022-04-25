import React from 'react';

import logo from '../../static/images/logo.png';

const SiteHeader = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__banner">
					<a href="/">
						<img src={logo} alt="logo"/>
					</a>
				</div>
			</div>
		</header>
	);
};

export default SiteHeader;