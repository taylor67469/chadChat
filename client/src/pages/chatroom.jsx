import React from "react";
import { Link } from "react-router-dom";
import useChat from "../utils/usechat"
import Lobby from "../pages/Lobby"


const Home = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/room/${roomName}`} className="enter-room-button"
     
      >
        Join room
        {/* <Lobby /> */}
      </Link>
    </div>
  );
};

export default Home;