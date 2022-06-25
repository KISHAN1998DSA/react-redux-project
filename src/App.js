
import './App.css';
// import HomeContainer from './container/HomeContainer'
// import HeaderContainer from './container/HeaderContainer';
import Home from './components/Home';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Home/>
        {/* <HeaderContainer/>
        <HomeContainer/> */}
      </header>
    </div>
  );
}

export default App;
