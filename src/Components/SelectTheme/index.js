import React from 'react';
import Select from './styles';

const SelectTheme = ({ setTheme }) => {
	const themes = [
		{
			themeName: "Standard",
			contentBg: "#f25757",
			headerBg: "#0d0d0d",
			menuBg: "#FFFFFF",
			footerBg: "#0d0d0d",
			footerFg: "#f22e2e",
			textFg: "#FFFFFF",
			headerFg: "#f29727",
			menuFg: "#f29727",
		},
		{
			themeName: "Yellow",
			contentBg: "#5cacf2",
			headerBg: "#0d0d0d",
			menuBg: "#FFFFFF",
			footerBg: "#0d0d0d",
			footerFg: "#f2cd13",
			textFg: "#FFFFFF",
			headerFg: "#f2e30f",
			menuFg: "#f2cd13",
		}

	];

	return (
		<Select onChange={e => setTheme(JSON.parse(e.target.value))}>
			{themes.map(theme => (
				<option key={theme.themeName} value={JSON.stringify(theme)}>{theme.themeName}</option>
			))}		
		</Select>
	)
};

export default SelectTheme;