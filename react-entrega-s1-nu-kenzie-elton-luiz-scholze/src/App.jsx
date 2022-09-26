import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import NuKenzie from "./assets/NuKenzie.svg";
import { TotalMoney } from "./components/TotalMoney";
import { LandingPage } from "./components/LandingPage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("");
  const [login, setLogin] = useState(false);

  return (
    <>
      {login === true ? (
        <div className="App">
          <header className="App-header">
            <img src={NuKenzie} alt="Logo NuKenzie" />
            <button type="button" onClick={() => setLogin(false)}>
              Início
            </button>
          </header>
          <main className="container">
            <section>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </section>
            <aside>
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                setFilter={setFilter}
                filter={filter}
              />
            </aside>
          </main>
        </div>
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
