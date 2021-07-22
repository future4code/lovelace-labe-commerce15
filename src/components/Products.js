import React from 'react';
import styled from "styled-components"
import ShoppingCartItem from './ShoppingCartItem';

const MainContainer = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  margin: 10px;
`

class Products extends React.Component {


  render() {
    console.log(this.props)
    return (
      <MainContainer>
        <CardContainer>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="imagem"></img>
          <p>Produto 1</p>
          <p>Preço R$ 2,5</p>
          <button>Adicionar ao Carrinho</button>
        </CardContainer>
        <CardContainer>
          <img src="https://picsum.photos/id/237/200/300" alt="imagem"></img>
          <p>Produto 2</p>
          <p>Preço R$ 7,5</p>
          <button onClick={this.props.adicionarCarrinho}>Adicionar ao Carrinho</button>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default Products;
