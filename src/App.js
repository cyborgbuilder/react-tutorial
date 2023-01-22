import './App.css';
// import { useNavigate } from 'react-router-dom';
// import Navbar_01 from './components/Navbar_01';
import About from './components/About';
import CounterApp from './components/CounterApp';
// import Home from './components/Home';
// import Page_Two from './components/Page_Two';
function App() {
   let component
   // eslint-disable-next-line default-case
  //  switch (window.location.pathname) {
  //    case "/":
  //      component = <Home />
  //      break;
  //    case "/about":
  //      component = <About />
  //      break;
  //    case "/page":
  //      component = <Page_Two />
  //      break;
  //  }
  return (
    <div className="App">
      <CounterApp />
    </div>
  );
}

export default App
