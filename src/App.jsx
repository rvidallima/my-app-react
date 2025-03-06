import './App.css';
import FirstComponent from './components/FirstComponent/index,jsx';

function Saudacao(fullname) {
  let nomes = fullname.split(' ')
  return `${nomes[0]} ${nomes[nomes.length - 1]} `
}

function Welcome() {
  return <h1> Welcome </h1>
}

function App() {
  const names = ['Pedro', 'Larissa', 'João', 'Marcos', 'Lucas']
  let word = 'Marco Aurelio da Silva'
  return (
    <>
    <FirstComponent />
    <Welcome />   
    <h1>Olá, {Saudacao(word)}</h1>    
    {
      names.map((name, index) => {
        return <h1 key={index}>{name}</h1>
      })
    }
    </>
  );
}

export default App;
