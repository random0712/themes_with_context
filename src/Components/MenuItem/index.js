import React from 'react';
import A from './styles';

const MenuItem = ({ children }) => {
	return (
		<A href="#">
			{children}
		</A>
	);
};

export default MenuItem;