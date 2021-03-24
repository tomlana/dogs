import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class CadastroCaesList extends Component {

  constructor(props) {
    super(props);
    this.state = {cadastro_caes: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/cadastrocao')
      .then(response => response.json())
      .then(data => this.setState({cadastro_caes: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/cadastrocao/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedCadastroCaes = [...this.state.cadastro_caes].filter(i => i.id !== id);
      this.setState({cadastro_caes: updatedCadastroCaes});
    });
  }

  render() {
    const {cadastro_caes, isLoading} = this.state;

    if (isLoading) {
      return <p>Carregando...</p>;
    }

    const cadastroCaesList = cadastro_caes.map(cadastro_caes => {
      return <tr key={cadastro_caes.id_cao}>
        <td style={{whiteSpace: 'nowrap'}}>{cadastro_caes.nome}</td>
        <td>{cadastro_caes.raca}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/cadastrocaes/" + cadastro_caes.id}>Editar</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(cadastro_caes.id)}>Excluir</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/cadastrocaes/novo">Adicionar Cão</Button>
          </div>
          <h3>Lista de cães</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="10%">Id</th>
                <th width="20%">Nome</th>
                <th width="20%">Raça</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {cadastroCaesList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CadastroCaesList;