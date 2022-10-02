import ChatForm from "./ChatForm";
import React from "react";

const Chat = () => {
  return (
    <div>
      <ChatForm />
      <button
        className="bg-white border-0 btn-light w-100"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Chatea con nosotros
      </button>
    </div>
  );
};

export default Chat;
