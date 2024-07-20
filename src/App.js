import "./App.css";
import ListaCompras from "./components/ListaCompras";
import React, { useState } from "react";
import Carrinho from "./assets/Carrinho_compras.png";

function App() {
  const [textoItem, setTextoItem] = useState("");
  const [textoQuant, setTextoQuant] = useState("");
  const [itens, setItens] = useState([]);

  const atualizarItem = (event) => {
    setTextoItem(event.target.value);
  };

  const atualizarQuant = (event) => {
    setTextoQuant(event.target.value);
  };

  const adicionarItem = () => {
    if (textoItem && textoQuant) {
      setItens([...itens, { item: textoItem, quant: textoQuant }]);
      setTextoItem("");
      setTextoQuant("");
    }
  };

  const excluirItem = (index) => {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  };

  return (
    <div className="body">
      <div className="parte_esquerda">
        <img src={Carrinho} alt="Carrinho de compras" />

        <h1> Lista de Compras </h1>

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

      <div className="parte_direita">
        <h1> Sua lista: </h1>

        <div className="Lista">
          {itens.map((item, index) => (
            <ListaCompras key={index} item={item.item} quant={item.quant} onExcluir={() => excluirItem(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
