import logo from './logo.svg';
import './App.css';
import {connect, sendMsg} from "./api";

import Header from "./components/Header";

function App() {
  connect()
  const send = () => {
    console.log('hello')
    sendMsg('hello')
  };
  return (
    <div className="App">
      <Header />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
