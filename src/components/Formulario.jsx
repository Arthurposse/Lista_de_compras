import React from "react";
import "../App.css";

function Formulario({
  textoItem,
  setTextoItem,
  textoQuant,
  setTextoQuant,
  textoItemEditado,
  setTextoItemEditado,
  textoQuantEditado,
  setTextoQuantEditado,
  adicionarItem,
  salvarEdicao,
  cancelarEdicao,
  editandoIndex,
}) {
  const atualizarItem = (event) => {
    if (editandoIndex !== null) {
      setTextoItemEditado(event.target.value);
    } else {
      setTextoItem(event.target.value);
    }
  };

  const atualizarQuant = (event) => {
    if (editandoIndex !== null) {
      setTextoQuantEditado(event.target.value);
    } else {
      setTextoQuant(event.target.value);
    }
  };

  return (
    <div>
      {editandoIndex !== null ? (
        <div className='Forms'>
          <h3> Editar Item: </h3>
          <input
            type="text"
            placeholder="Insira o nome do item"
            value={textoItemEditado}
            onChange={atualizarItem}
          />

          <h3> Editar Quantidade: </h3>
          <input
            type="number"
            placeholder="Insira a quantidade"
            value={textoQuantEditado}
            onChange={atualizarQuant}
          />

          <button onClick={salvarEdicao}>Salvar</button>
          <button onClick={cancelarEdicao}>Cancelar</button>
        </div>
      ) : (
        <div className='Forms'>
          <h3> Item: </h3>
          <input
            type="text"
            placeholder="Insira o nome do item"
            value={textoItem}
            onChange={atualizarItem}
          />

          <h3> Quantidade: </h3>
          <input
            type="number"
            placeholder="Insira a quantidade"
            value={textoQuant}
            onChange={atualizarQuant}
          />

          <button onClick={adicionarItem}>Adicionar</button>
        </div>
      )}
    </div>
  );
}

export default Formulario;