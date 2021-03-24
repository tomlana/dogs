import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../components/Navbar';

class CadastroDonosEdit extends Component {

  emptyDonos = {
    nome: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyDonos
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const cadastro_dono = await (await fetch(`/api/cadastrodono/${this.props.match.params.id}`)).json();
      this.setState({item: cadastro_dono});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/cadastrodono', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/cadastrodono');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Editar Dono' : 'Adicionar Dono'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" id="nome_dono" value={item.nome_dono || ''}
                   onChange={this.handleChange} autoComplete="nome"/>
          </FormGroup>           
          <FormGroup>
            <Button color="primary" type="submit">Salvar</Button>{' '}
            <Button color="secondary" tag={Link} to="/cadastrodonos">Cancelar</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(CadastroDonosEdit);