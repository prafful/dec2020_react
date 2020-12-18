
import './App.css';
import Content from './spa/content';
import Menu from './spa/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>React SPA</h1>
          <Menu></Menu>
          <Content></Content>
        </div>
      </header>
    </div>
  );
}

export default App;
