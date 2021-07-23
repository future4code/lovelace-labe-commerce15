import React from 'react';
import styled from 'styled-components'
import Products from './components/Products';
import Filters from './components/Filters';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartItem from './components/ShoppingCartItem';


const Espacamento = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
class App extends React.Component {
  state = {
    produtos: [
      {
        id: "1",
        nome: "produto01",
        preco: "100",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      },
      {
        id: "2",
        nome: "produto02",
        preco: "1000",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      },
      {
        id: "3",
        nome: "produto03",
        preco: "500",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      }
    ],
    carrinho: []
  }

  addCarrinho = () => {
    const novoCarrinho = [
      ...this.state.produtos,
      {
        id: this.state.produtos.id,
        nome: this.state.produtos.nome,
        preco: this.state.produtos.preco
      },
    ]

    this.setState({
      carrinho: novoCarrinho,
    })
  }

  render() {
    console.log(this.state.carrinho)
    return (
      <Espacamento>
        <Filters />
          <Products adicionarCarrinho={this.addCarrinho} adicionarProdutos={this.state.produtos}/>
          <ShoppingCartItem  adicionarCarrinho={this.addCarrinho} carrinho={this.state.carrinho}/>
      </Espacamento>
    )
  }
}

export default App;
