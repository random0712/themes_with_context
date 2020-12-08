import styled from 'styled-components';

const A = styled.a`
	text-decoration: none;
	color: ${props => props.theme.menuFg};
	font-size: 1.3rem;

	width: 100%;
	height: 50px;
	border-bottom: solid 0.5px ${props => props.theme.menuFg};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	transition: 0.2s;

	&:hover {
		background-color: ${props => props.theme.menuFg};
		color: ${props => props.theme.menuBg};
	}
`;

export default A;