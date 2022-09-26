import imgLixeira from "../../assets/trash.svg";

export function List({ listTransactions }) {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <li key={index}>
          <div>
            <p>{transaction.description}</p>
            <span>{transaction.type}</span>
          </div>
          <div>
            <p>{transaction.value}</p>
            <img src={imgLixeira} alt="" />
          </div>
        </li>
      ))}
    </ul>
  );
}
