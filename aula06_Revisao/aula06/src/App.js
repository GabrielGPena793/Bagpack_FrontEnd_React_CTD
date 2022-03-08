import Button from "./Button";
import Card from "./Card";
import Eu from "./eu.jpg"
import "./styles.css"


function App() {
  return (
      <Card>

        <img src={Eu} alt="exemplo" />
        <div className="container-button">
          <Button>aceitar</Button>
          <Button>cancelar</Button>
        </div>
      </Card>
  );
}

export default App;
