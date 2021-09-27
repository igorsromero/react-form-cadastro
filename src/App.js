import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;
