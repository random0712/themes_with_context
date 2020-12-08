import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import I from './styles';


const MenuToggle = ({ toggleMenu }) => {
	return (
		<I className="menu-toggle" onClick={e => toggleMenu()}>
			<GiHamburgerMenu />
		</I>
	);
};

export default MenuToggle;