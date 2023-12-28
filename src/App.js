import './App.css';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handleLang = (x) => {
    i18next.changeLanguage(x);
    navigate('/c');
  };
  return (
    <div className="App">
      <button onClick={() => handleLang('en')}>English</button>
      <button onClick={() => handleLang('ar')}>Arabic</button>
      <button onClick={() => handleLang('fr')}>French</button>
    </div>
  );
}

export default App;
