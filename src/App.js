import React, { Component } from 'react';
import styled  from 'styled-components';
import data from './data.json';
import DataRow from './DataRow';
import {
  sortByKeyAsc,
  sortByKeyDesc,
} from './functions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keys: [],
      sortedBy: null,
      sortMethod: '',
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
    let newArr,
        sortedMethod;
    if (this.state.keys.indexOf(key) === this.state.sortedBy) {
      if (this.state.sortedMethod === 'asc') {
        newArr = sortByKeyDesc(this.state.data, key);
        sortedMethod = 'desc';
      } else {
        newArr = sortByKeyAsc(this.state.data, key);
        sortedMethod = 'asc';
      }
    } else {
      newArr = sortByKeyAsc(this.state.data, key);
      sortedMethod = 'asc';
    }
    this.setState({
      data: newArr,
      sortedBy: this.state.keys.indexOf(key),
      sortedMethod,
    });

  }

  renderHeader = () => {
    if (this.state.keys.length > 0) {
      return this.state.keys.map((key, index) => (
        <Key
          key={index}
          address={key === 'address'}
          onClick={() => this.onKeyClick(key)}>
          {key}
          {this.state.sortedBy === index &&
          this.state.sortedMethod === 'asc' &&
            ' ⬆️'}
          {this.state.sortedBy === index &&
          this.state.sortedMethod === 'desc' &&
            ' ⬇️'}
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
