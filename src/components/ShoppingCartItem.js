import React from 'react';
import styled from "styled-components"

class ShoppingCartItem extends React.Component {
  render() {
    const listaDoCarrinho = this.props.carrinho.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.id}</p>
          <p>{item.nome}</p>
          <p>{item.preco}</p>
        </div>
      )
    })
    return (
      <div >
        {listaDoCarrinho}
        <button>Remover</button>
        <p>Valor Total: R$ 70</p>
      </div>
    )
  }
}

export default ShoppingCartItem;
