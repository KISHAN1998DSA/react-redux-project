
import './App.css';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderContainer/>
        <HomeContainer/>
      </header>
    </div>
  );
}

export default App;
