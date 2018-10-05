import React, { Component } from 'react';
import styled  from 'styled-components';
import data from './data.json';
import DataRow from './DataRow';
import {
  sortByKey,
} from './functions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keys: [],
    };
  }

  componentWillMount = () => {
    let keys = [];
    if (data.length > 0) {
      keys = Object.keys(data[0]);
    }
    this.setState({
      data,
      keys,
    });
  }

  onKeyClick = key => {
    let newArr = sortByKey(this.state.data, key);
    this.setState({
      data: newArr,
    })
  }

  renderHeader = () => {
    if (this.state.keys.length > 0) {
      return this.state.keys.map((key, index) => (
        <Key
          key={index}
          address={key === 'address'}
          onClick={() => this.onKeyClick(key)}>
          {key}
        </Key>
      ));
    }
  }

  renderContent = () => {
    if (this.state.data.length > 0) {
      return this.state.data.map((data, index) => (
        <DataRow
          key={index}
          data={data}
          keys={this.state.keys}/>
      ));
    }
  }

  render() {
    console.log('data: ', this.state.data)
    return (
      <Wrapper>
        <Table>
          <HeaderRow>
            {this.renderHeader()}
          </HeaderRow>
          <DataWrapper>
            {this.renderContent()}
          </DataWrapper>
        </Table>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

const Table = styled.div`
  width: 100%;
`;


const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #14aaf5;
`;

const Key = styled.span`
  width: ${({ address }) => address ? 150 : 100}px;
  text-transform: capitalize;
  padding: 10px;
  border: 1px solid #14aaf5;
  border-radius: 4px;
  cursor: pointer;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
