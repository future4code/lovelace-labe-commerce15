import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
 
  padding-bottom: 6em;
  margin-top: 0;

`;


const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0em;
  
`;

export class Filters extends React.Component {
  render() {
    return (
      <FiltersContainer>
        <h3>Filtre sua escolha:</h3>
        <InputContainer>
          Mínimo Valor:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Máximo Valor:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por
          <br></br>
          Palavra-Chave:
          
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
      </FiltersContainer>
    );
  }
}
