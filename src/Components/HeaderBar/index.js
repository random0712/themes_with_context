import React from 'react';

import Header from './styles';

const HeaderBar = ({ children }) => {

	return(
		<Header>
			{children}
		</Header>
	);
};

export default HeaderBar;