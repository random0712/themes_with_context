import styled from 'styled-components'

const Footer = styled.footer`
	grid-area: footer;

	background-color: ${props => props.theme.footerBg};
	color: ${props => props.theme.footerFg};

	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 10px;
	min-height: 30px;

	& svg {
		padding: 0px 5px;
		color: red;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
	};
`;

export default Footer;