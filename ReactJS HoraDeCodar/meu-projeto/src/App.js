// import logo from './logo.svg';
import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {
  
  const nome = "Fulano"

  return (
    <div className="App">  
      <HelloWorld />
      <Frase />
      <SayMyName nome="Maycon"/>
      <SayMyName nome={nome} />
      <Pessoa nome="Maycon" idade="33" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
