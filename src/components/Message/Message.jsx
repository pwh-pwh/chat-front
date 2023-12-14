import "./Message.scss"

const Message = ({message}) => {
    let msg = JSON.parse(message);
    return (
        <div className="Message">
            <p>{msg.body}</p>
        </div>
    )
}

export default Message;