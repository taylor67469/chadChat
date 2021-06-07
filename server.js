const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var http = require('http').createServer(app);
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const bodyParser = require('body-parser')
// const io = require('socket.io')(3100)
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});
app.use(bodyParser.json())

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeeDb");

io.on("connection", (socket) => {
  
  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});
// io.on('connection',(socket)=>{
//   console.log('user connected')
//   socket.on('joinRoom',(data)=>{      // data will look like => {myID: "123123"}
//       console.log('user joined room')
//       socket.join(data.myID) 
//   })
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
