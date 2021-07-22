import React from "react";
import { Filters } from "./components/Filters/Filters";
import { Products } from "./components/Products/Products";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import styled from "styled-components";
import { Title } from "./components/styles";




const AppContainer = styled.div`
  display: ruby-base-container;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  
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
    name: "Inteligência Artificial by Felipe Gushiken",
    price: 200,
    photo: "https://picsum.photos/200/200?a=7"
  },
  {
    id: 3,
    name: "Produto 3",
    price: 30,
    photo: "https://picsum.photos/200/200?a=3"
  },
  {
    id: 4,
    name: "Produto 4",
    price: 10,
    photo: "https://picsum.photos/200/200?a=4"
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
        name: "Produto 4",
        price: 10,
        photo: "https://picsum.photos/200/200?a=4",
        quantity: 1
      },
      {
        id: 3,
        name: "Produto 3",
        price: 30,
        photo: "https://picsum.photos/200/200?a=3",
        quantity: 2
      }
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
      <AppContainer>
       <h1>lkjlkj</h1>
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
    );
  }
}

export default App;
