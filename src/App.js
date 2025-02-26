import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready()
    }, [])
    const onClose =() =>{
        tg.close();
    }
  return (
    <div className="App">
      work
        <button onClick={onClose}>close</button>
        <button>open</button>
    </div>
  );
}

export default App;
