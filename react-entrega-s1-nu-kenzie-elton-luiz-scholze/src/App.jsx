import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import NuKenzie from "./assets/NuKenzie.svg";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={NuKenzie} alt="Logo NuKenzie" />
        <button type="button">Início</button>
      </header>
      <main className="container">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setFilter={setFilter}
          filter={filter}
        />
      </main>
    </div>
  );
}

export default App;
