import "./App.css";
import SayName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";
import ShowPhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      {ShowPhoto()}
      {SayName()}
      {Adress()}
    </div>
  );
}

export default App;
