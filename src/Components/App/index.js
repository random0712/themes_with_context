import React from 'react';

import { ThemeProvider } from 'styled-components';
import { FaReact, FaHeart } from 'react-icons/fa';

import { Div, RightMenuItems } from './styles'

import Content from '../Content'; 
import MenuBar from '../MenuBar';
import FooterBar from '../FooterBar'
import HeaderBar from '../HeaderBar';
import Icon from '../Icon'
import SelectTheme from '../SelectTheme';
import MenuItem from '../MenuItem';
import MenuToggle from '../MenuToggle';

import useTheme from '../../Hooks/useTheme';
import useMenu from '../../Hooks/useMenu';

function App() {
	const [menu, toggleMenu] = useMenu();
	const [theme, setTheme] = useTheme();
  	return (
	  	<ThemeProvider theme={theme}>
		    <Div className={`App ${menu}`}>
		    	<HeaderBar>
		    		<Icon>
		    			<FaReact />
		    		</Icon>
		    		<RightMenuItems>
		    			<SelectTheme setTheme={setTheme} />
		    			<MenuToggle toggleMenu={toggleMenu} />
		    		</RightMenuItems>
		    	</HeaderBar>
		    	<Content>
		    		Lorem ipsum bibendum dictum leo purus felis nullam urna tempus, feugiat praesent fames nullam cubilia sed purus congue dolor class, nam mollis porttitor lacus a id adipiscing sagittis. et congue dolor netus nisi tincidunt risus, lorem proin platea malesuada aptent donec enim, quis integer lacinia consectetur imperdiet. congue dolor donec nullam porttitor suspendisse nam lacus porttitor, fusce ut fames dui donec semper urna, sagittis donec ante habitant ultrices ultricies duis. lobortis vestibulum iaculis ultricies consectetur a tempus molestie hac sagittis, iaculis tristique elit vel ante erat vestibulum tristique sollicitudin, fringilla faucibus purus a ante phasellus tincidunt rutrum. 
		    	</Content>
		    	<MenuBar>
		    		<MenuItem>Item 1</MenuItem>
		    		<MenuItem>Item 2</MenuItem>
		    		<MenuItem>Item 3</MenuItem>
		    		<MenuItem>Item 4</MenuItem>
		    	</MenuBar>
		    	<FooterBar>Desenvolvido com <FaHeart/> por Patrick Amaro</FooterBar>
		    </Div>
	    </ThemeProvider>
  	);
}

export default App;
