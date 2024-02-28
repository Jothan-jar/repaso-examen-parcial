
import "./App.css";
import Doctor from "./Components/Doctor";

function App() {
  let doctores = [
    { id: 1, nombre: "Rick Sanchez", especialidad: "Gastroenterologo" },
    { id: 2, nombre: "Julius Hibbert", especialidad: "Dermatologo" },
    { id: 3, nombre: "Nick Riviera", especialidad: "Otorrino" },
    { id: 4, nombre: "John Zoidberg", especialidad: "Cirujano" }
  ]
  return (
    <>
      <form>
        
      </form>
      {doctores.map((item) =>  <Doctor key={item.id} item={item}/>)}
  
    </>
  );
}

export default App;
