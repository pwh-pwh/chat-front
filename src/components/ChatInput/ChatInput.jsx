import "./ChatInput.scss"

const ChatInput = ({send}) => (
    <div className="ChatInput">
        <input type="text" placeholder="Enter your message here..." onKeyDown={send}/>
    </div>
);

export default ChatInput;