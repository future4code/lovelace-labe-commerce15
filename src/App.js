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
        id: Date.now(),
        nome: "produto01",
        preco: "100",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      },
      {
        id: Date.now(),
        nome: "produto02",
        preco: "100",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      }
    ],
    carrinho: []
      // {
      //   quantidade: 10,
      //   preco: "",
      //   produto: ""
      // }
  }

  addCarrinho = () => {
    const novoCarrinho = [
      ...this.state.carrinho,
      {
        id: Date.now(),
        nome: "produto02",
        preco: "100",
        imagem: "https://picsum.photos/seed/picsum/200/300"
      }
    ]
    console.log(this.novoCarrinho)
    this.setState({
      carrinho: novoCarrinho,
      // quantidade: 80,
      // preco: 50.00,
      // produto: "x"
    })
  }

  render() {
    console.log(this.state.carrinho)
    return (
      <Espacamento>
        <Filters />
        {/* <Home> */}
          <Products adicionarCarrinho={this.addCarrinho}/>
        {/* </Home> */}
        {/* <ShoppingCart> */}
          <ShoppingCartItem adicionarCarrinho={this.addCarrinho} carrinho={this.state.carrinho}/>
        {/* </ShoppingCart> */}
      </Espacamento>
    )
  }
}

export default App;
