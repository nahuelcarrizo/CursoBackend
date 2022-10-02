import "./App.css";

import Chat from "./components/chat/index.js";
import Header from "./components/Header.js";
import Products from "./components/Products.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Chat />
    </div>
  );
}

export default App;
