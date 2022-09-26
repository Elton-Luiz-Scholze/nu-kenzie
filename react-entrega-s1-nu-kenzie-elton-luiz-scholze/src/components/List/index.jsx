import imgLixeira from "../../assets/trash.svg";
import noCard from "../../assets/NoCard.svg";

export function List({ listTransactions, setListTransactions }) {
  function deleteTransaction(index) {
    const transactionFiltered = listTransactions.filter(
      (transaction, transactionIndex) => transactionIndex !== index
    );
    setListTransactions(transactionFiltered);
  }

  return (
    <ul>
      {listTransactions.length ? (
        listTransactions.map((transaction, index) => (
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
