import React from 'react';

import styled from 'styled-components';
import Products from './components/Products';
import Filters from './components/Filters';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartItem from './components/ShoppingCartItem';


const Espacamento = styled.div `
margin: 10px;

`



class App extends React.Component {
  state={
    id: Date.now(),
    nome: "produto",
    preco:"100",
    imagem:"https://picsum.photos/seed/picsum/200/300"   


  }





  render() {
    return (
      <Espacamento> 
        <Filters>


        </Filters>
        <Home>
          <Products>

          </Products>
        </Home>

import styled from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <div>
        <Filters>

        </Filters>
        <Products>
          <ProductCard>

          </ProductCard>
        </Products>

        <ShoppingCart>
          <ShoppingCartItem>

          </ShoppingCartItem>


        </ShoppingCart>



      </Espacamento>
    )

  }


        </ShoppingCart>
      </div>
    )
  }

}

export default App;
