import React from "react";
import { Filters } from "./components/Filters/Filters";
import { Products } from "./components/Products/Products";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import styled from "styled-components";
import { Title,ImageBackground } from "./components/styles";






const AppContainer = styled.div`
  display: ruby-base-container;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  text-align: center;
  color: white;
  font-weight: bolder;
  h5{
    font-size:4rem;
    padding: 0rem;
    margin: 0vh;
  }
 
  
  
`;

const products = [
  {
    id: 1,
    name: "Foguete - Apollo XI ",
    price: 10000,
    photo: "https://images8.alphacoders.com/105/thumb-1920-1054256.jpg"
  },
  {
    id: 2,
    name: "Inteligência Artificial by Ramon Dias",
    price: 200000,
    photo: "https://picsum.photos/200/200?a=7"
  },
  {
    id: 3,
    name: "Carcaça da Space X",
    price: 30,
    photo: "https://picsum.photos/200/200?a=3"
  },
  {
    id: 4,
    name: "Base de Alcântara ",
    price: 10000,
    photo: "https://picsum.photos/200/200?a=4"
  },
  {
    id: 5,
    name: "Pet Cósmico ",
    price: 5555555,
    photo: "https://picsum.photos/200/200?a=5"
  },
  {
    id: 6,
    name: "Foquetinho ",
    price: 1555,
    photo: "https://picsum.photos/200/200?a=6"
  },
  {
    id: 7,
    name: "Minérios Espaciais ",
    price: 1450,
    photo: "https://picsum.photos/200/200?a=7"
  },
  {
    id: 8,
    name: "Projeto de Base Espacial ",
    price: 99868,
    photo: "https://picsum.photos/200/200?a=8"
  },
  {
    id: 9,
    name: "Meteorito ",
    price: 1654564,
    photo: "https://picsum.photos/200/200?a=9"
  },
  {
    id: 10,
    name: "Lixo Espacial ",
    price: 1214,
    photo: "https://picsum.photos/200/200?a=10"
  }
];

class App extends React.Component {
  state = {
    minFilter: -Infinity,
    maxFilter: Infinity,
    nameFilter: "",
    productsInCart: [
      {
        id: 4,
        name: "Produto de Exemplo",
        price: 10,
        photo: "https://picsum.photos/200/200?a=4",
        quantity:0
      },
    
    ]
  };

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
  };

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(
      (product) => productId === product.id
    );

    if (productInCart) {
      const newProductsInCart = this.state.productsInCart.map((product) => {
        if (productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          };
        }

        return product;
      });

      this.setState({ productsInCart: newProductsInCart });
    } else {
      const productToAdd = products.find((product) => productId === product.id);

      const newProductsInCart = [
        ...this.state.productsInCart,
        { ...productToAdd, quantity: 1 }
      ];

      this.setState({ productsInCart: newProductsInCart });
    }
  };

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    this.setState({ productsInCart: newProductsInCart });
  };

  render() {
    return (
      <ImageBackground>
      <AppContainer>
      
        
       <h5>AstroAmazon</h5>
       <Title>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        /> <ShoppingCart
        productsInCart={this.state.productsInCart}
        onRemoveProductFromCart={this.onRemoveProductFromCart}
      />
      </Title>
        
        <Products
        
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
       
      </AppContainer>
      </ImageBackground>
    );
  }
}

export default App;
