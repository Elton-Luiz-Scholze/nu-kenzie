import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="container">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
}

export default App;