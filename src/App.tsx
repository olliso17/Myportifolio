import React from 'react';
import './App.css';
import Container from './components/container/Container';
import Card from './components/tittle/Card';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";



function App() {
  return (
    <div className="App">
        <Container className='container-image'>
            <Card class='card-head'>
                <img src={require('./image/foto.jpg')} alt="" />
            </Card>   
        </Container>
        <Container className='container-link'>
          <Card class='card-link'>
              <Card class='link'><FaLinkedin/></Card>
              <Card class='link'><FaGithub/></Card>
              <Card class='link'><FaWhatsapp/></Card>
            </Card>
        </Container>
        <Container className='container-aleatorio'>
          <Card class='card-aleatorio'>

          </Card>
        </Container>
        <Container className='container-text'>
          <Card class='text-body'><h1>Patrícia Silva Oliveira</h1></Card>
        </Container>
        <Container className='container-footer'>
          <Card class='card-footer'>
            
          </Card>
        </Container>

    </div>
  );
}

export default App;
