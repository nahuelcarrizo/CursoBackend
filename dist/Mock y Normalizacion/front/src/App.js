import "./App.css";

import ChatPage from "./components/chat/index";
import Header from "./components/Header";
import Products from "./components/Products";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:3080");
function App() {
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <Products />
        <ChatPage socket={socket} />
      </div>
    </div>
  );
}

export default App;
