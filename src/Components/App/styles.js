import styled from 'styled-components';

const Div = styled.div`
	display: grid;
	grid-template-columns: 20% 1fr;
	grid-template-rows: 50px 1fr 5%;
	grid-template-areas: 
		"header header"
		"menu content"
		"footer footer";

	height: 100%;
`;


export default Div;
