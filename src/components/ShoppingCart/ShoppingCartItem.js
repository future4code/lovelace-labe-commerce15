import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  }
  button{
    width: 2em;
  }
`;

export class ShoppingCartItem extends React.Component {
  render() {
    return (
      <ItemContainer>
        <p>{this.props.cartItem.quantity}    itens de</p>
        <p>{this.props.cartItem.name}</p>
        <button
          onClick={() =>
            this.props.onRemoveProductFromCart(this.props.cartItem.id)
          }
        >
          X
        </button>
      </ItemContainer>
    );
  }
}
