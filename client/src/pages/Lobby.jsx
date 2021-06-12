import React from "react";
import { Link, useParams } from 'react-router-dom';
// import "./ChatRoom.css";
import useChat from "../utils/usechat";
import ScrollToBottom from "react-scroll-to-bottom";
const Lobby = (props) => {
  const { roomId } = useParams();
  const { messages, sendMessage,setMessages } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage,props.user);
    setNewMessage("");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "60px", letterSpacing: "10px", color: "white" }}>Room: {roomId}</h1>

      <div class="container" style={{ textAlign: "center" }} >
        <div className=" col chat-room-container">
          <div className="messages-container" >
            <ol className="messages-list">
              <ScrollToBottom style={{ width: 300, height: 300 }}>
                {messages.map((message, i) => (
                  <li
                    key={i}
                    className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                      }`} style={{ color: "white", textAlign: "middle", fontSize: "3  0px" }}
                  >
                    {message.user}: {message.body}
                  </li>
                ))}
              </ScrollToBottom>
            </ol>

            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "middle" }}>

              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "right" }}>
                {/* Test 1 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "left" }}>
                {/* Test 2 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "right" }}>
                {/* Test 3 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "left" }}>
                {/* Test 4 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "right" }}>
                {/* Test 5 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "left" }}>
                {/* Test 6 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "right" }}>
                {/* Test 7 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "left" }}>
                {/* Test 8 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "right" }}>
                {/* Test 9 */}
              </h3>
            </div>
            <div className="accordion-item border-0">
              <h3 className="accordion-header" id="flush-headingTwo" style={{ textAlign: "left" }}>
                {/* Test 10 */}
              </h3>
            </div>
          </div>
          <br />

          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field"
            rows="3" cols="132"
            style={{ textAlign: "center", borderRadius: "4px", width:"100%" }}
          />

          <br /><br />

          <button onClick={handleSendMessage} style={{ background: "rgb(255, 73, 14)", color: "white" }} className="btnSubmit" >
            Send
          </button>

          <br /><br />

          <Link to="/room">Go Back to go to different room</Link>
        </div>
      </div>
    </>

  );
};

export default Lobby;
