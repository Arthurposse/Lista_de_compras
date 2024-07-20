import React from "react";
import "../App.css";

function ListaCompras({ item, quant, onExcluir }) {
  let texto = `${item}: ${quant} unidade(s)`;

  return (
    <div className="item">
      <h3>{texto}</h3>
      <button>Editar</button>
      <button onClick={onExcluir}>Excluir</button>
    </div>
  );
}

export default ListaCompras;