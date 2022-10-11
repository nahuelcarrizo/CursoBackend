import { useEffect, useRef, useState } from "react";

const ChatBody = ({ socket, typingStatus }) => {
  const lastMessageRef = useRef(null);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    socket.on("allMessages", (data) => {
      setAllMessages(...allMessages, data);
    });
  }, [socket, allMessages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [allMessages]);

  return (
    <>
      <header className="chat__mainHeader">
        <p className="h2">Chat with us!</p>
      </header>

      <div className="message__container">
        {allMessages.messages !== undefined &&
          allMessages.messages.map((el, index) =>
            el.user.mail === localStorage.getItem("mail") ? (
              <div className="message__chats" key={index}>
                <p className="sender__name">You</p>
                <div className="message__sender text-end">
                  <p>{el.text}</p>
                </div>
              </div>
            ) : (
              <div className="message__chats" key={index}>
                <p className="text-start">{el.user.name}</p>
                <div className="message__recipient text-start">
                  <p>{el.text}</p>
                </div>
              </div>
            )
          )}
        <div ref={lastMessageRef} />
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
