import styled from 'styled-components';

const Header = styled.header`
	grid-area: header;

	background-color: ${props => props.theme.headerBg};
	color: ${props => props.theme.headerFg};
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 10px;
	z-index: 2;

	box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.3);
`;

export default Header;