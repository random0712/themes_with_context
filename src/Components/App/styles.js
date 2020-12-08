import styled from 'styled-components';

const Div = styled.div`
	display: grid;
	height: 100%;

	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr 5%;
	grid-template-areas: 
		"header header"
		"content content"
		"footer footer";
	& menu {
		display: none;
	};

	&.menu-open {
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr 5%;
		grid-template-areas: 
			"header header"
			"menu menu"
			"footer footer";
		& menu {
			display: flex;
		};
		& main {
			display: none;
		}
	};

	@media (min-width: 768px) {
		grid-template-columns: 20% 1fr;
		grid-template-rows: 50px 1fr 5%;
		grid-template-areas: 
			"header header"
			"menu content"
			"footer footer";

		& menu {
			display: flex;
		}

		& main {
			display: flex;
		}

		& .menu-toggle {
			display: none;
		}

	};
`;

const RightMenuItems = styled.div`

`;


export { Div, RightMenuItems };
