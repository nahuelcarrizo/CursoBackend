import "./index.css";

import React, { useEffect, useState } from "react";

import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatPage = ({ socket }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const [userName, setUserName] = useState("");
  const [isLog, setIsLog] = useState(false);
  const [typingStatus, setTypingStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("mail", mail);
    localStorage.setItem("age", age);
    localStorage.setItem("userName", userName);
    setIsLog(true);
    socket.emit("connected");
  };

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <div className="chatContainer flex-column m-3">
      <div className="chat__main border">
        {!isLog ? (
          <form
            className="home__container d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
          >
            <h2 className="home__header">Sign in to Open Chat</h2>
            <span className="d-flex justify-content-between">
              <label htmlFor="mail" className="pe-2">
                Mail:
              </label>
              <input
                type="text"
                minLength={6}
                name="mail"
                id="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </span>
            <span className="d-flex justify-content-between">
              <label htmlFor="firstname" className="pe-2">
                First Name:
              </label>
              <input
                type="text"
                minLength={6}
                name="firstname"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </span>
            <span>
              <label htmlFor="lastname" className="pe-2">
                LastName:
              </label>
              <input
                type="text"
                minLength={6}
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </span>
            <span>
              <label htmlFor="age" className="pe-2">
                Age:
              </label>
              <input
                type="text"
                minLength={6}
                name="age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </span>
            <span>
              <label htmlFor="username" className="pe-2">
                Username:
              </label>
              <input
                type="text"
                minLength={6}
                name="username"
                id="username"
                className="username__input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </span>

            <button className="home__cta m-2 btn btn-success">SIGN IN</button>
          </form>
        ) : (
          <>
            <ChatBody typingStatus={typingStatus} socket={socket} />
            <ChatFooter socket={socket} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
