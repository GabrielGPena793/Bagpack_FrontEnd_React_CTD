import './App.css';
import FunctionalComponet from './componets/FunctionalComponet';
import data from "./componets/data"
import ClassComponent from './componets/ClassComponent';

function App() {
  return (
    <>
    <div>
        <div className='convidados-container'>
          <span>Convidados:</span>
          <FunctionalComponet convidados={data} />

          <span>Tarefas:</span>
          <ClassComponent convidados={data} />
        </div>
      </div>
    </>
  );
}

export default App;
