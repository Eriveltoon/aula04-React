import React from 'react';

function App() {
  const [usuario, setUsuario] = React.useState();
  const [senha, setSenha] = React.useState();
  const [logado, setLogado] = React.useState();

  function CheckLogin(){
    if(usuario == "Erivelton" && senha == "123456"){
      setLogado({
        nome: "Erivelton"
      });
    }
  }

  function Deslogar(){
    setLogado();
  }

  if(!logado){
    return (
      <div>
        Usuario: <input type="text" onChange={(e) => setUsuario(e.target.value)} />
        Senha: <input type="password" onChange={(e) => setSenha(e.target.value)} />
        <button onClick={CheckLogin}>Login</button>
      </div>
    );
  }else{
    return (
      <>
        <h1>{logado.nome}</h1>
        <button onClick={Deslogar}>Deslogar</button>
      </>)
  }


  
}

export default App;
