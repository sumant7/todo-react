import './App.css';
import Header from './Components/Header'
import {Footer}  from './Components/Footer';
import {Todos} from './Components/Todos';

function App() {
  let todos =[
    {
      sno:1,
      title: "Watch Jujutsu Kaisen",
      desc: "Complete the series"
    },
    {
      sno:1,
      title: "Watch Attack on Titan",
      desc: "Complete the series"
    },
    {
      sno:1,
      title: "Watch SpyxFamily",
      desc: "Complete the series"
    },
  ]
  return (
    <>
      <Header title="Todo List" search ={false}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
