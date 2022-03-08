import "./styles.css"
import Ul from "./Ul";
import data from "./data";


function App() {

  return (
    <>
      <h1>Clientes caninos da veterinária pingo</h1>
      {
        data.map((dado, index) => 
          <Ul key={index.toString()} item={dado} />
        )
      }
    </>
  );

}

export default App;
