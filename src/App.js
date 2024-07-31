import "./App.css";
import ListaCompras from "./components/ListaCompras";
import Formulario from "./components/Formulario";
import React, { useState } from "react";
import Carrinho from "./assets/Carrinho_compras.png";

function App() {
  const [textoItem, setTextoItem] = useState("");
  const [textoQuant, setTextoQuant] = useState("");
  const [itens, setItens] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [textoItemEditado, setTextoItemEditado] = useState("");
  const [textoQuantEditado, setTextoQuantEditado] = useState("");

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
        <Formulario
          textoItem={textoItem}
          setTextoItem={setTextoItem}
          textoQuant={textoQuant}
          setTextoQuant={setTextoQuant}
          textoItemEditado={textoItemEditado}
          setTextoItemEditado={setTextoItemEditado}
          textoQuantEditado={textoQuantEditado}
          setTextoQuantEditado={setTextoQuantEditado}
          adicionarItem={adicionarItem}
          salvarEdicao={salvarEdicao}
          cancelarEdicao={cancelarEdicao}
          editandoIndex={editandoIndex}
        />
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
