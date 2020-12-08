import styled from 'styled-components';

const Menu = styled.menu`
	grid-area: menu;

	background: ${props => props.theme.menuBg};

	box-shadow: 5px 0px 12px 0px rgba(0, 0, 0, 0.3);
`;

export default Menu;