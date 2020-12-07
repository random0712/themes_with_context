import styled from 'styled-components';

const Div = styled.div`
	display: grid;
	grid-template-columns: 20% 1fr;
	grid-template-rows: 10% 1fr 10%;
	grid-template-areas: 
		"header header"
		"menu content"
		"footer footer";

	height: 100%;
`;

export default Div;
