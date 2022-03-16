import { useState } from "react";
import Item from "./components/Item";
import "./styles.css"
import tasksTemp from "./data";
import Button from "./components/Button"



//Sempre que precisarmos alterar um valor mostrado em tela, precisaremos de um state


function App() {

  const [tasks, setTasks] = useState(tasksTemp)

  const [textInput, setTextoInput] = useState("");


  function handleTextInput(event){
      setTextoInput(event.target.value);
  }

  function addItem(){

    const newTaks = {
      id: Date.now().toString(),
      nome: textInput,
      status: false,
    }

    setTasks([...tasks, newTaks]);
    setTextoInput("");

  }

  function deleteItem(id){

    const temp = tasks.filter(item => item.id !== id)

    setTasks(temp)

  }

  return (
    <>
      <header className="header">
        <input
          value={textInput}
          type="text"
          className="input"
          onChange={(event) => handleTextInput(event)}
        />
            
          <div className="container_buttons">
            <Button texto="Adicionar" onClick={addItem}/> 
            <Button texto="Limpar" />
          </div>
        </header>

      <main>
            { tasks.length > 0 ?  
              tasks.map((task) => (
                <Item key={task.id} id={task.id} nome={task.nome} status={task.status} funcaoApagar={deleteItem} />     
            )) : 
              <span>Nenhuma tarefa adicionada</span>
            }
      </main>
    </>
  );
}


export default App;
