import React from 'react';

import Div from './styles'

import Content from '../Content'; 
import MenuBar from '../MenuBar';
import FooterBar from '../FooterBar'
import HeaderBar from '../HeaderBar';

function App() {
  return (
    <Div className="App">
    	<HeaderBar>Header</HeaderBar>
    	<Content>Content</Content>
    	<MenuBar>MenuBar</MenuBar>
    	<FooterBar>Footer</FooterBar>
    </Div>
  );
}

export default App;
