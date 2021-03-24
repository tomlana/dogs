import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../components/Navbar';

class RelCaesDonosEdit extends Component {

  emptyRel = {
    id_dono: '',
    nome_dono:'',
    id_cao: '',
    nome_cao: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyRel
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const rel_caes_donos = await (await fetch(`/api/relcaesdonos/${this.props.match.params.id}`)).json();
      this.setState({item: rel_caes_donos});
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

    await fetch('/api/relcaesdonos', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/relcaesdonos');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Editar Relação' : 'Adicionar Relação'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="id_dono">Id - Dono</Label>
            <Input type="text" name="id_dono" id="id_dono" value={item.id_dono || ''}
                   onChange={this.handleChange} autoComplete="id_dono"/>
          </FormGroup>  
          <FormGroup>
            <Label for="nome_dono">Nome do Dono</Label>
            <Input type="text" name="nome" id="nome_dono" value={item.nome_dono || ''}
                   onChange={this.handleChange} autoComplete="nome_dono"/>
          </FormGroup> 
          <FormGroup>
            <Label for="id_cao">Id - Cão</Label>
            <Input type="text" name="id_cao" id="id_cao" value={item.id_cao || ''}
                   onChange={this.handleChange} autoComplete="nome"/>
          </FormGroup> 
          <FormGroup>
            <Label for="nome_cao">Nome do Cão</Label>
            <Input type="text" name="nome_cao" id="nome_cao" value={item.nome_cao || ''}
                   onChange={this.handleChange} autoComplete="nome_cao"/>
          </FormGroup>          
          <FormGroup>
            <Button color="primary" type="submit">Salvar</Button>{' '}
            <Button color="secondary" tag={Link} to="/relcaesdonos">Cancelar</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(RelCaesDonosEdit);