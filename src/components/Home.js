import React from 'react';
import styled from "styled-components"
import Products from './Products';

class Home extends React.Component {
  render() {
    return (
      <div >
        <h2>Contidada de Produtos</h2>
        <h2>Ordenação</h2>
        <select>
          <option>decreste</option>
          <option>crescente</option>
          </select>      
      <Products>
        
      </Products>
      </div>
    )

  }

}

export default Home;
