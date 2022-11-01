import { React } from "react";

const Header = () => {
  const headerStyle = {
    width: "100%",
    backgroundColor: "black",
    minHeight: "20vh",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
  };
  return (
    <>
      <div style={headerStyle}>Desafio Log-in por formulario</div>
    </>
  );
};

export default Header;
