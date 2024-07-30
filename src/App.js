import "./App.css";
import ListaCompras from "./components/ListaCompras";
import React, { useState } from "react";
import Carrinho from "./assets/Carrinho_compras.png";

function App() {
  const [textoItem, setTextoItem] = useState("");
  const [textoQuant, setTextoQuant] = useState("");
  const [itens, setItens] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [textoItemEditado, setTextoItemEditado] = useState("");
  const [textoQuantEditado, setTextoQuantEditado] = useState("");

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

  const iniciarEdicao = (index) => {
    setEditandoIndex(index);
    setTextoItemEditado(itens[index].item);
    setTextoQuantEditado(itens[index].quant);
  };

  const salvarEdicao = () => {
    const novosItens = itens.map((item, index) =>
      index === editandoIndex ? { item: textoItemEditado, quant: textoQuantEditado } : item
    );
    setItens(novosItens);
    cancelarEdicao();
  };

  const cancelarEdicao = () => {
    setEditandoIndex(null);
    setTextoItemEditado("");
    setTextoQuantEditado("");
  };

  return (
    <div className="body">
      <div className="parte_esquerda">
        <img src={Carrinho} alt="Carrinho de compras" />

        <h1> Lista de Compras </h1>

        {editandoIndex !== null ? (
          <>
            <h3> Editar Item: </h3>
            <input
              type="text"
              placeholder="Insira o nome do item"
              value={textoItemEditado}
              onChange={(e) => setTextoItemEditado(e.target.value)}
            />

            <h3> Editar Quantidade: </h3>
            <input
              type="number"
              placeholder="Insira a quantidade"
              value={textoQuantEditado}
              onChange={(e) => setTextoQuantEditado(e.target.value)}
            />

            <button onClick={salvarEdicao}>Salvar</button>
            <button onClick={cancelarEdicao}>Cancelar</button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="parte_direita">
        <h1> Sua lista: </h1>

        <div className="Lista">
          {itens.map((item, index) => (
            <ListaCompras
              key={index}
              item={item.item}
              quant={item.quant}
              onExcluir={() => excluirItem(index)}
              onEditar={() => iniciarEdicao(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;