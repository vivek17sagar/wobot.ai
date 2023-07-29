import './App.css';
import Header from './Component/Header';
import Userform from './Component/Userform';
import mainlogo from './Images/Wobot_ai_Logo-removebg-preview.png'

function App() {
  return (
    <div className="App">
    <div>
    <div>
      <img src={mainlogo} alt='mainlogo_img' className='mainlogo'/>
      </div>
      <div className='container'>
        <Header/>
        <Userform/>
      </div>
      </div>
    </div>
  );
}

export default App;
