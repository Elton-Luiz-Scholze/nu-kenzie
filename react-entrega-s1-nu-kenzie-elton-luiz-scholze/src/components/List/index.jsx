import imgLixeira from "../../assets/trash.svg";
import noCard from "../../assets/NoCard.svg";
import "./style.css";

export function List({
  listTransactions,
  setListTransactions,
  setFilter,
  filter,
}) {
  function deleteTransaction(index) {
    const transactionFiltered = listTransactions.filter(
      (transaction, transactionIndex) => transactionIndex !== index
    );
    setListTransactions(transactionFiltered);
  }

  const transactionFiltered = listTransactions.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );

  return (
    <ul>
      <div>
        <h3>Resumo financeiro</h3>
        <nav>
          <button type="button" onClick={() => setFilter("")}>
            Todos
          </button>
          <button type="button" onClick={() => setFilter("Entrada")}>
            Entradas
          </button>
          <button type="button" onClick={() => setFilter("Despesa")}>
            Despesas
          </button>
        </nav>
      </div>
      {listTransactions.length ? (
        transactionFiltered.map((transaction, index) => (
          <li key={index}>
            <div>
              <p>{transaction.description}</p>
              <span>{transaction.type}</span>
            </div>
            <div>
              <p>{transaction.value}</p>
              <button onClick={() => deleteTransaction(index)}>
                <img src={imgLixeira} alt="" />
              </button>
            </div>
          </li>
        ))
      ) : (
        <img src={noCard} alt="" />
      )}
    </ul>
  );
}
