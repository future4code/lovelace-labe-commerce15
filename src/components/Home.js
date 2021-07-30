import React from 'react';
import styled from "styled-components"
import Products from './Products';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
  }

  select{
    height: 30px;
  }
`

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu>
        <h2>Quantidade de Produtos</h2>
        <div>
        <h2>Ordenação</h2>
        <select>
          <option>decrescente</option>
          <option>crescente</option>
        </select>
        </div>
        </Menu>
      </div>
    )
  }
}

export default Home;
