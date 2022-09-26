export function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce((a, b) => a + Number(b.value), 0);
  if (total !== 0) {
    return (
      <div>
        <p>
          Valor total: <span>{total}</span>
        </p>
        <span>O valor se refere ao saldo</span>
      </div>
    );
  }
}
