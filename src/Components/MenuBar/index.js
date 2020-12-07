import React from 'react';

import Menu from './styles';

const MenuBar = ({ children }) => {
	return(
		<Menu>{children}</Menu>
	);
};

export default MenuBar;