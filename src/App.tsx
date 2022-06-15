import React from 'react';
import './App.css';
import Container from './components/container/Container';
import Card from './components/tittle/Card';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";



function App() {
  return (
    <div className="App">
        <Container className='header'>
            <Card class='card-head'>
                <img src={require('./image/foto.jpg')} alt="" />
            </Card>
            <Card class='card-link'>
              <Card class='link'><FaLinkedin/></Card>
              <Card class='link'><FaGithub/></Card>
              <Card class='link'><FaWhatsapp/></Card>
            </Card>
          
            
        </Container>
        <Container className='body'>
          <Card class='text-body'><h1>Patrícia Silva Oliveira</h1></Card>
        </Container>
        <Container className='footer'>

        </Container>

    </div>
  );
}

export default App;
