import logo from './logo.svg';
import './App.css';
import {connect, sendMsg} from "./api";

import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import {useState} from "react";

function App() {
    const [chatHistory, setChatHistory] = useState([])
    const addChatHistory = item => {
        setChatHistory([...chatHistory, item])
    }
    connect(addChatHistory)
    const send = () => {
        console.log('hello')
        sendMsg('hello')
    };
    return (
        <div className="App">
            <Header/>
            <ChatHistory chatHistory={chatHistory}/>
            <button onClick={send}>Hit</button>
        </div>
    );
}

export default App;
