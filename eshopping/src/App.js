import './App.css';
import {Navbar} from './components/Navbar'
import {MainRoutes} from "./Routes/MainRoutes"

function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      <Navbar/>
      <MainRoutes/>

    </div>
  );
}

export default App;
