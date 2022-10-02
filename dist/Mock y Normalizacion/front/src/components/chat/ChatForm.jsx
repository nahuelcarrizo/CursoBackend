import React, { useEffect, useState } from "react";

import { addMessage } from "../../services/ChatServices";

const ChatForm = () => {
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const chat = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      mail: mail,
      message: msg,
    };
    chat.push(message);
    console.log(chat);
  };
  useEffect((chat) => {
    return () => {
      addMessage(chat);
    };
  }, []);

  return (
    <div className="chatContainer position-absolute fixed-bottom border">
      <div className="position-relative">
        <div className="position-relative">
          <div className="border h-100 pb-3 collapse" id="collapseExample">
            <h3>Chat</h3>
            <div className="chatMsj border mt-1 mx-1">
              <ul id="chat" className="list-group"></ul>
            </div>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column p-2"
              id="formChat"
            >
              <label htmlFor="inputMail" className="pt-3 m-0">
                Mail:
              </label>
              <input
                type="text"
                id="inputMail"
                className="border-0 bg-light"
                onChange={(e) => setMail(e.target.value)}
              />
              <label htmlFor="inputMsj" className="pt-2 m-0">
                Your message:
              </label>
              <input
                type="text"
                id="inputMsj"
                className="border-0 bg-light"
                onChange={(e) => setMsg(e.target.value)}
              />
              <input type="submit" value="enviar" className="mt-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;
