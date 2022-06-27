
import './App.css';
// import HomeContainer from './container/HomeContainer'
// import HeaderContainer from './container/HeaderContainer';
import Home from './components/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './services/Routing';

function App() {
  return (
    <>
        <Header/>
        <Routing/>
        {/* <HeaderContainer/>
        <HomeContainer/> */}
    </>
  );
}

export default App;
