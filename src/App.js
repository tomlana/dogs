import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroCaesList from '../pages/cadastrocaes';
import CadastroCaesEdit from '../pages/cadastrocaesedit';
import CadastroDonosList from '../pages/cadastrodonos';
import CadastroDonosEdit from '../pages/cadastrodonosedit';
import RelatorioList from '../pages/relatorio';
import RelCaesDonosList from '../pages/relcaesdonos';
import RelCaesDonosEdit from '../pages/relcaesdonoedit';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/cadastrocaes' exact={true} component={CadastroCaesList}/>
          <Route path='/cadastrocaes/:id' component={CadastroCaesEdit}/>
          <Route path='/cadastrodonos' exact={true} component={CadastroDonosList}/>
          <Route path='/cadastrodonos/:id' component={CadastroDonosEdit}/>
          <Route path='/cadastrodonos' exact={true} component={CadastroDonosList}/>
          <Route path='/relatorio' exact={true} componet={RelatorioList}/>
          <Route path='/relacao' exact={true} component={RelCaesDonosList}/>
          <Route path='/relacao/:id' component={RelCaesDonosEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;