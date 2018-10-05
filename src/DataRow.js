import React, { Component } from 'react';
import styled  from 'styled-components';
import data from './data.json';

class DataRow extends Component {

  renderCells = () => {
    //console.log(this.props)
    return this.props.keys.map((key, index) => (
      <Cell
        key={index}>
        {this.props.data[key]}
      </Cell>
    ));
  }

  render() {
    return (
      <Wrapper>
        {this.renderCells()}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cell = styled.span`
  width: 120px;
`;

export default DataRow;
