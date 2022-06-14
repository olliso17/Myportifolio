import React from 'react';
import './App.css';
import Container from './components/container/Container';
import TextHeader from './components/tittle/TextHeader';

function App() {
  return (
    <div className="App">
        <Container className='header'>
          <Container className='nomeCard'><TextHeader class='textHeader' name='Patricia Silva Oliveira'></TextHeader></Container>
          <Container className='nomeLinkedin'><TextHeader class='textHeader' name='linke'></TextHeader></Container>
          <Container className='nomeZap'><TextHeader class='textHeader' name='zap'></TextHeader></Container>
          <Container className='nomeGit'><TextHeader class='textHeader' name='Git'></TextHeader></Container>
          </Container>
        <Container className='body'>Body</Container>
        <Container className='footer'>Footer</Container>

    </div>
  );
}

export default App;
