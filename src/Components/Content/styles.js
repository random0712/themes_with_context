import styled from 'styled-components';

const Main = styled.main`
	grid-area: content;

	background-color: ${props => props.theme.contentBg};
	color: ${props => props.theme.textFg};
	text-align: justify;
	padding: 10px;
`;

export default Main;