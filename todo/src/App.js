import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import {Footer}  from './Components/Footer';
import {Todos} from './Components/Todos';

function App() {
  return (
    <>
      <Header title="Todo List" search ={true}/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
