import './App.css';
import Fact from '../components/Fact';
import UserInput from '../components/UserInput';

function App() {
  return (
    <div className="App">
        <h1>Number Facts</h1>
        <UserInput />
        <Fact />
    </div>
  );
}

export default App;
