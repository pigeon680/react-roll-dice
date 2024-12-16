import logo from './logo.svg';
import './App.css';
import RollDice from './components/RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
        <RollDice />
      </header>
    </div>
  );
}

export default App;
