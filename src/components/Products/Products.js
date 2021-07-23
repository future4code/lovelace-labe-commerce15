import React from "react";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const ProductsContainer = styled.div`
  img {
    width: 100%;
    height: 45vh;
  }
`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-weight:bolder;
  font-size: 150%;
  margin-right: 2em;
  select{
    margin-left: 1em;
  }
`;


const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.8fr);
  gap: 16px;
  padding: 16px;
  background-color:midnightblue;
  img{
    width: 100%;
  }
`;

export class Products extends React.Component {
  state = {
    sort: "DECRESCENTE"
  };

  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) =>
        this.props.maxFilter ? product.price < this.props.maxFilter : true
      )
      .filter((product) =>
        this.props.minFilter ? product.price > this.props.minFilter : true
      )
      .filter((product) =>
        this.props.nameFilter
          ? product.name.includes(this.props.nameFilter)
          : true
      )
      .sort((a, b) =>
        this.state.sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
      );
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList();
    return (
      <ProductsContainer>
        <ProductsHeader>
          <p>Produtos encontrados: {filteredAndOrderedList.length}</p>
          <label>
            Pesquisar por : 
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>
        </ProductsHeader>
        <ProductsGrid>
          {filteredAndOrderedList.map((product) => {
            return (
              <ProductCard
                product={product}
                onAddProductToCart={this.props.onAddProductToCart}
              />
            );
          })}
        </ProductsGrid>
      </ProductsContainer>
    );
  }
}
