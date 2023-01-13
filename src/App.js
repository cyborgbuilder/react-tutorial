import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => navigate('page_02')}>Next</button>
    </div>
  );
}

export default App;
