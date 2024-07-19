import React from "react";
import "../ListaCompras.css";
import Carrinho from '../assets/Carrinho_compras.png'

function ListaCompras() {
    function adicionar() {
        const input_item = document.querySelector('.input_item');
        const input_quant = document.querySelector('.input_quant');
        const Lista = document.getElementById('Lista');

        if(input_item.value === '' && input_quant.value === '') {
            alert('Insira os dados!!')
        }

        else if(input_item.value === '') {
            alert('Insira o nome do item!!')
        }
        else if (input_quant.value === '') {
            alert('Insira a quantidade!!')
        }
        else {
            Lista.innerHTML += `<li> ${input_item.value}: ${input_quant.value} unidade(s) </li>`;
            input_item.value = '';
            input_quant.value = '';
        }
    }

    return (
        <div className="main">
            <div className="parte_esquerda">

                <img src={Carrinho} alt="Carrinho de compras" />

                <h1> Lista de Compras </h1>

                <h3> Item: </h3>
                <input type="text" className="input_item" placeholder="Insira o nome do item" />

                <h3> Quantidade: </h3>
                <input type="number" className="input_quant" placeholder="Insira a quantidade" />

                <button onClick={adicionar}> Adicionar </button>
            </div>

            <div className="parte_direita">
                <h1> Sua lista: </h1>

                <ul id="Lista">

                </ul>
            </div>
        </div>
    );
};

export default ListaCompras;