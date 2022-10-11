import React, { useRef, useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const currentCount = useRef(0);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() /* && localStorage.getItem("userName") */) {
      socket.emit("message", {
        id: currentCount.current,
        text: message,
        user: {
          mail: localStorage.getItem("mail"),
          firstname: localStorage.getItem("firstName"),
          lastname: localStorage.getItem("lastName"),
          age: localStorage.getItem("age"),
          alias: localStorage.getItem("userName"),
        },
      });
      currentCount.current += 1;
    }
    setMessage("");
  };

  const handleTyping = () =>
    socket.emit("typing", `${localStorage.getItem("userName")} is typing`);

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <input type="submit" className="sendBtn" value="SEND" />
      </form>
    </div>
  );
};

export default ChatFooter;
