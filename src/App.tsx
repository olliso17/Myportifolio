import React from 'react';
import './App.css';
import Container from './components/container/Container';
import TextHeader from './components/tittle/TextHeader';

function App() {
  return (
    <div className="App">
        <Container className='header'><TextHeader class='textHeader' name='Patricia Silva Oliveira' 
        linkedin='linkedin' zap='12345' instagram='olli.so17'></TextHeader></Container>
        <Container className='body'>Body</Container>
        <Container className='footer'>Footer</Container>

    </div>
  );
}

export default App;
