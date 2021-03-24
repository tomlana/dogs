import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class RelCaesDonosList extends Component {

  constructor(props) {
    super(props);
    this.state = {rel_caes_donos: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/relcaesdonos')
      .then(response => response.json())
      .then(data => this.setState({rel_caes_donos: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/relcaesdonos/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedRel_Caes_Donos = [...this.state.rel_caes_donos].filter(i => i.id !== id);
      this.setState({rel_caes_donos: updatedRel_Caes_Donos});
    });
  }

  render() {
    const {rel_caes_donos, isLoading} = this.state;

    if (isLoading) {
      return <p>Carregando...</p>;
    }

    const rel_Caes_DonosList = rel_caes_donos.map(rel_caes_donos => {
      return <tr key={rel_caes_donos.id_dono}>
        <td style={{whiteSpace: 'nowrap'}}>{rel_caes_donos.nome_dono}</td>
        <td>{rel_caes_donos.id_cao}</td>
        <td>{rel_caes_donos.nome_cao}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/relatorio'/" + rel_caes_donos.id}>Editar</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(rel_caes_donos.id)}>Excluir</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    
    return (
        <div>
          <AppNavbar/>
          <Container>
          <div className="float-right">
            <Button color="success" tag={Link} to="/relcaesdonos/novo">Adicionar registro</Button>
          </div>
            <h3>Cães e seus donos</h3>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th width="10%">Id - Dono</th>
                  <th width="20%">Nome do Dono</th>
                  <th width="10%">Id - Cão</th>
                  <th width="20%">Nome do Cão</th>
                  <th width="10%">Ações</th>
                </tr>
              </thead>
              <tbody>
              {rel_caes_donosList}
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
  }

export default RelCaesDonosList;
