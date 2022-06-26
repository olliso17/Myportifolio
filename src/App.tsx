import React, { useState } from 'react';
import './App.css';
import Container from './components/container/Container';
import Card from './components/tittle/Card';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Button from './components/button/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Container className='container-image'>
          <Card class='card-head'>
            <img src={require('./image/foto.jpg')} alt="" />
          </Card>
        </Container>
        <Container className='container-link'>
          <Card class='card-link'>
            <Button href='https://www.linkedin.com/in/patricia-silva-oliveira-/' target='_blank' class='link' ><FaLinkedin /></Button>
            <Button href='https://github.com/olliso17' class='link' target='_blank'><FaGithub /></Button>
            <Button href='https://api.whatsapp.com/send?phone=5579996519451' class='link' target='_blank'><FaWhatsapp /></Button>
          </Card>
        </Container>
        <Container className='container-aleatorio'>
          <Card class='card-aleatorio'>

          </Card>
        </Container>
        <Container className='container-text'>
          <Card class='text-body'>
            <h1>Patrícia Silva Oliveira</h1>
            <p>Lorem ipsum dolor sit amet. Est doloremque corporis in nostrum omnis sed nostrum labore et itaque temporibus qui cumque facilis! Ad suscipit voluptatem cum earum velit id quia nobis est amet aspernatur.</p>
            <p>Sit autem omnis et recusandae dolorum sit architecto tempora? Ab totam totam est quis autem sit ipsum porro?</p>
            <p>Ea aliquid aperiam a voluptatibus sunt vel quaerat ullam non praesentium possimus. Id necessitatibus praesentium non sunt ducimus qui optio totam sed iste obcaecati id beatae libero. In veniam dolorum et architecto dolorum ex internos porro! Et repellat repellendus et magnam exercitationem est laudantium quaerat et minus galisum ab officia magni est aliquam commodi.</p>
            <p>Lorem ipsum dolor sit amet. Ut laboriosam voluptas id quidem inventore At laborum repudiandae est tempora expedita sit voluptatem autem. Et rerum voluptatem ut tenetur repellendus est veritatis Quis non rerum dolores sed dolore mollitia ea explicabo temporibus. Aut voluptas debitis qui natus doloribus sit asperiores provident hic quia dolorum cum dolore aperiam aut placeat perspiciatis. Et quidem corporis est tenetur voluptatem ut doloribus libero nam atque animi.</p>
          </Card>
        </Container>
        <Container className='container-footer'>
          <Card class='card-footer'>

          </Card>
        </Container>

      </div>
    </Router>
  );
}

export default App;
