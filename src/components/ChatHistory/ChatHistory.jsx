import "./ChatHistory.scss"

import Message from "../Message";
const ChatHistory = ({chatHistory}) => {
    const messages = chatHistory.map((msg,index) => (
        <Message message={msg.data} />
    ))
    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>
    )
};

export default ChatHistory;