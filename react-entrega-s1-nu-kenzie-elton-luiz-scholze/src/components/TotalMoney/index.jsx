import "./style.css";

export function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce((a, b) => a + Number(b.value), 0);
  if (total !== 0) {
    return (
      <div className="total__money">
        <p>
          Valor total:{" "}
          <span className="total">R${total.toFixed(2).replace(".", ",")}</span>
        </p>
        <span>O valor se refere ao saldo</span>
      </div>
    );
  }
}
