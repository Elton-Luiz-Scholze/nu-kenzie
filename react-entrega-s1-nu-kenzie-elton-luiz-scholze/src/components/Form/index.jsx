import { useState } from "react";

export function Form({ listTransactions, setListTransactions }) {
  const [operation, setOperation] = useState({
    description: "",
    type: "",
    value: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (operation.type === "Despesa") {
      operation.value = operation.value * -1;
    }

    if (
      operation.description !== "" &&
      operation.value !== "" &&
      operation.type !== ""
    ) {
      setListTransactions([...listTransactions, operation]);
    }

    setOperation({
      description: "",
      type: "",
      value: 0,
    });
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="inputDescription">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        name="inputDescription"
        id="inputDescription"
        value={operation.description}
        onChange={(event) =>
          setOperation({ ...operation, description: event.target.value })
        }
      />
      <span>Ex.: Compra de roupas</span>
      <div>
        <label htmlFor="inputNumber">Valor</label>
        <input
          type="number"
          name="inputValue"
          id="inputValue"
          value={operation.value}
          onChange={(event) =>
            setOperation({ ...operation, value: event.target.value })
          }
        />
        <p>R$</p>
      </div>
      <div>
        <label htmlFor="inputTipeValue">Tipo de valor</label>
        <select
          onChange={(event) =>
            setOperation({ ...operation, type: event.target.value })
          }
          defaultValue={operation.type}
        >
          <option value="">Selecione...</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}
