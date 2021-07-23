import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import {Container, Typography } from "@material-ui/core"

class App extends Component {

  render() {
    return (
//Usamos material ui no CAP 2
//4.3 vou criar a propr aoEnviar, vai receber uma fcao q irei criar abaixo. 
//esta funcao será chamada pela propried aoEnviar do FormularioCadastro, e terá q passar quais sao os dados
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    );
  }
}
//crio a funcao, receberei 'dados' do form
function aoEnviarForm(dados){
  console.log(dados);
}
//5.2- poderia colocar essa validacao em um componente separado, mas como vai ser mt simples colocarei aqui no App.js
//fcao receberá um cpf(nº) e se não tiver 11 caract(tamanho) retornará msg do obj erro
//fcao de validacao que devolve td esse estado(td return)
//por ultimo irei passar a fcao para o componente do form
function validarCPF(cpf){
  if(validarCPF.length!=11){
    return {valido:false, texto:"CPF deve ter 11 dígitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
