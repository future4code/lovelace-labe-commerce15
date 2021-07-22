import React from 'react';
import styled from "styled-components"
import Products from './Products';

class Home extends React.Component {
  render() {
    return (
      <div >
        <h2>Quantidade de Produtos</h2>
        <h2>Ordenação</h2>
        <select>
          <option>decrescente</option>
          <option>crescente</option>
          </select>      
      <Products>
        
      </Products>
      </div>
    )

  }

}

export default Home;
