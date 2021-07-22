import React from 'react';
import styled from "styled-components"

class Products extends React.Component {
  render() {
    return (
      <div >
       <img src="https://picsum.photos/seed/picsum/200/300" alt="imagem"></img>
       <p>Produto 1</p>
       <p>Preço R$ 2,5</p>
       <button>Adicionar ao Carrinho</button>
      </div>
    )

  }

}

export default Products;
