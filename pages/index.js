import React, { Component } from 'react';
import '../src/App';
import AppNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/relatorio">Acessar a lista completa de donos e seus cães</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Home;