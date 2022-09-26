export function Form({ listTransactions, setListTransactions }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="inputDescription">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        name="inputDescription"
        id="inputDescription"
        value={listTransactions.description}
        onChange={(event) => setListTransactions(event.target.value)}
      />
      <span>Ex.: Compra de roupas</span>
      <div>
        <label htmlFor="inputNumber">Valor</label>
        <input
          type="number"
          name="inputValue"
          id="inputValue"
          value={listTransactions.value}
          onChange={(event) => setListTransactions(event.target.value)}
        />
        <p>R$</p>
      </div>
      <div>
        <label htmlFor="inputTipeValue">Tipo de valor</label>
        <select>
          <option value="entrada">Entrada</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}
