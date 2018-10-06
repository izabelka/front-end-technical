import React, { Component } from 'react';
import styled  from 'styled-components';

class DataRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  renderCells = () => {
    return this.props.keys.map((key, index) => (
      <Cell
        key={index}
        address={key === 'address'}>
        {this.props.data[key]}
      </Cell>
    ));
  }

  onStartHover = () => {
    this.setState({
      hovered: true,
    });
  }

  onStopHover = () => {
    this.setState({
      hovered: false,
    });
  }

  onRemoveClick = () => {
    this.props.onRemoveRowClick(this.props.keyForRemoving);
  }

  render() {
    return (
      <Wrapper
        onMouseOver={this.onStartHover}
        onMouseOut={this.onStopHover}>
        {this.renderCells()}
        <RemoveButton
          show={this.state.hovered}
          onClick={this.onRemoveClick}>
            {'X'}
        </RemoveButton>
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
  width: ${({ address }) => address ? 130 : 100}px;
`;

const RemoveButton = styled.span`
  opacity: ${({ show }) => show ? 1 : 0};
  position: absolute;
  right: 50px;
  width: 100px;
  background-color: red;
  z-index: 1;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

export default DataRow;
