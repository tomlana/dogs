import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class RelatorioList extends Component {

  constructor(props) {
    super(props);
    this.state = {relatorio: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('api/relatorio')
      .then(response => response.json())
      .then(data => this.setState({relatorio: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/relatorio/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedRelatorio = [...this.state.relatorio].filter(i => i.raca_cao !== raca_cao);
      this.setState({relatorio: updatedRelatorio});
    });
  }

  render() {
    const {relatorio, isLoading} = this.state;

    if (isLoading) {
      return <p>Carregando...</p>;
    }

    const relatorioList = relatorio.map(relatorio => {
      return <tr key={relatorio.id_dono}>
        <td style={{whiteSpace: 'nowrap'}}>{relatorio.nome_dono}</td>
        <td>{relatorio.id_cao}</td>
        <td>{relatorio.nome_cao}</td>
        <td>{relatorio.raca_cao}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/relatorio'/" + relatorio.id}>Editar</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(relatorio.id)}>Excluir</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    
    return (
        <div>
          <AppNavbar/>
          <Container>
            <h3>Relatório</h3>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th width="10%">Id - Dono</th>
                  <th width="20%">Nome do Dono</th>
                  <th width="10%">Id - Cão</th>
                  <th width="20%">Nome do Cão</th>
                  <th width="20%">Raça do Cão</th>
                  <th width="10%">Ações</th>
                </tr>
              </thead>
              <tbody>
              {relatorioList}
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
  }

export default RelatorioList;
