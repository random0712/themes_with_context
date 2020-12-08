import { useState, useEffect } from 'react';

const useTheme = (colors={}) => {
	const [theme, setTheme] = useState({
		themeName: "Standard",
		contentBg: "#f25757",
		headerBg: "#0d0d0d",
		menuBg: "#FFFFFF",
		footerBg: "#0d0d0d",
		footerFg: "#f22e2e",
		textFg: "#FFFFFF",
		headerFg: "#f29727",
		menuFg: "#f29727",
	});

	useEffect(() => {
		const oldTheme = { ...theme };
		const newTheme = Object.assign(oldTheme, colors);
		setTheme(newTheme);
	}, []) // eslint-disable-line

	return [theme, setTheme];
}

export default useTheme;