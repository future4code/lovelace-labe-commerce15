import React from 'react';
import styled from "styled-components"

class ShoppingCartItem extends React.Component {
  render() {
    return (
      <div >
          <contador>1x</contador>
          <p>Produto 1</p>
          <button>Remover</button>
          <p>Valor Total: R$ 70</p>


      </div>
    )

  }

}

export default ShoppingCartItem;
