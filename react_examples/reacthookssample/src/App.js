import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/classcomponent';
import FunctionalComponent from './components/functionalcomponent';
import GetData from './components/functionalaxios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassComponent></ClassComponent>
        <FunctionalComponent></FunctionalComponent>
        <GetData></GetData>
      </header>
    </div>
  );
}

export default App;
