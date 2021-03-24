import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class CadastroDonosList extends Component {

  constructor(props) {
    super(props);
    this.state = {cadastro_donos: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/cadastrodono')
      .then(response => response.json())
      .then(data => this.setState({cadastro_donos: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/cadastrodono/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedCadastroDonos = [...this.state.cadastro_donos].filter(i => i.id !== id);
      this.setState({cadastro_donos: updatedCadastroDonos});
    });
  }

  render() {
    const {cadastro_donos, isLoading} = this.state;

    if (isLoading) {
      return <p>Carregando...</p>;
    }

    const cadastroDonosList = cadastro_donos.map(cadastro_donos => {
      return <tr key={cadastro_donos.id_dono}>
        <td style={{whiteSpace: 'nowrap'}}>{cadastro_donos.nome}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/cadastrodonos/" + cadastro_donos.id}>Editar</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(cadastro_donos.id)}>Excluir</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/cadastrodonos/novo">Adicionar Dono</Button>
          </div>
          <h3>Lista de donos</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="10%">Id</th>
                <th width="20%">Nome</th>
                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {cadastroDonosList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default CadastroDonosList;