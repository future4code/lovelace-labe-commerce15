import React from 'react';
import styled from "styled-components"

class ShoppingCartItem extends React.Component {
  render() {
    // console.log(this.props)
    // console.log(this.props.carrinho)
    const listaDoCarrinho = this.props.carrinho.map((item, index) => {
      return (
        <div key={index}>
          <span>{item.quantidade}</span>
          <span>{item.preco}</span>
          <span>{item.produto}</span>
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
