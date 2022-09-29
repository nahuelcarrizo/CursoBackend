import React, { createContext, useState } from "react";

export const MyUser = createContext({});

export default function UserContext({ children }) {
  const [user, setUser] = useState();
  const [isLog, setIsLog] = useState(false);

  const createUser = (data) => {
    setUser(data);
    setIsLog(true);
  };

  return (
    <MyUser.Provider value={{ createUser, user, isLog }}>
      {children}
    </MyUser.Provider>
  );
}
