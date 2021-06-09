import React from "react";
import {Link, useParams} from 'react-router-dom';
// import "./ChatRoom.css";
import useChat from "../utils/usechat";

const Lobby = () => {
  // console.log(useParams());
  const {roomId}  = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <Link to="/room">Go Back to go to different room</Link>
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>

  );
};
<textarea align = "right">
  
<Card >
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>

</textarea>


export default Lobby;
