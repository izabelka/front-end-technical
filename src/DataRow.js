import React, { Component } from 'react';
import styled  from 'styled-components';

class DataRow extends Component {

  renderCells = () => {
    return this.props.keys.map((key, index) => (
      <Cell
        key={index}
        address={key === 'address'}>
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
  border-bottom: 1px solid #e1e4e8;
  padding: 12px 0 12px 14px;
`;

const Cell = styled.span`
  width: ${({ address }) => address ? 150 : 100}px;
`;

export default DataRow;
