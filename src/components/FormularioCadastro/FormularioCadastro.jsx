///3.2 HOOKS, 1ªcoisa eh importar o usestate
import React, { useState } from 'react';
//vou dar o import no material ui, para conseguir usar! Tenho que colocar a tag maiuscula!
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

//inves de usar cc, e criar classe. Vou criar FUNCTION!
//o nome da funcao eh o nome do component
//qd faz funcao, o return será a renderizacao da arvore

//4.3 com funcoes, recebemos os parametros dentro das chaves, colocaremos a propried passada no App.js
//5.2 receberei a propried de validarCPF, depois vou usar no onBlur 
function FormularioCadastro({aoEnviar, validarCPF}) {
  //3.2 O state q qremos usar é o nome. Declaramos a cost 'nome', o usestate tb eh uma fcao
  //o usestate me devolve um array com 2 elem, 1º eh a var e o 2º eh a funcao que config o state, NO CASO 'set..'
  //Alem de declarar abaixo, preciso atribuir o valor delas nos textfields com value e onChange(validar)
  //4.2 O promo e novid tem que ser true, inicialmente
  //5.1 vou criar um estado para os erros de valid, começo estado inicial como um objeto como cpf obj valido
  const [nome, setNome] = useState('Ricardo');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true,texto:""}});

  //LOGICA do TextField: no onChange, qd receber o evento, vou chamar o setNome(fcao de atrib do nome) 
  //p/ ser igual ao event.target.value, ou seja, estou atrib meu estado ao valor do evento,
  //com if(validar/condicao) ponho cond  ate 3 letras e chamo dnv o setNome

  //no ex. ONchange nv, vou salvar o valor do evento numa var temporaria, fazer a condicao,tempNOme=tempnome com substring, no fim atribuo meu estado no fim com a temp.
  /*EX:         onChange={(event) => {
   let tempNome = event.target.value;
   if (tempNome.length >= 3) {
     tempNome = tempNome.substr(0, 3);
   }
   setNome(tempNome);
 }}
  */
  //4.2 Está arrumando o text field e formcontrollabel usando os states
  // p/fazer o formcontrollabel, uso o onChange e vai receber uma funcao, msm coisa que os texfields
  // vai receber um evento e dele vai pegar o setPromocoes e recebera o event.targt.checked
 //defaultchecked: place holder, checked: controla o valor do componente
 //4.3 Vou passar a propried aoEnviar com os objetos(nome,sobrenome,..) para o App.js
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
        aoEnviar({nome,sobrenome,cpf,novidades, promocoes});
      }}>

      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        //evento 'onBlur' qd tira o foco do campo atual. Vai receber uma arrow funct p/ config o erro
        onBlur={(event)=>{
          const ehValido = validarCPF(event.target.value);
          setErros({cpf:ehValido})
        }}

        //5.1 VOU CRIAR A REGRA DE VALIDACAO, RESTRICAO! Vou criar um estado p/ erros de validacao
        //vou criar a propr de erro, se true, o campo fica vermelho. se false ficará normal azul.
        // '!' para negar, se eh valido nao tem erro
        error={!erros.cpf.valido}
        //helpertext eh o texto de erro, atrelo o texto ao estado
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
            defaultChecked={promocoes}
            color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            name="novidades"
            defaultChecked={novidades}
            color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>

    </form>
  );
}
export default FormularioCadastro;