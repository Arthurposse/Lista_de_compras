import React from "react";
import "../App.css";

function ListaCompras({ item, quant, onExcluir, onEditar }) {
  let texto = `${item}: ${quant} unidade(s)`;

  return (
    <div className="item">
      <h3>{texto}</h3>
      <div>
        <button onClick={onEditar}>Editar</button>
        <button onClick={onExcluir}>Excluir</button>
      </div>
    </div>
  );
}

export default ListaCompras;