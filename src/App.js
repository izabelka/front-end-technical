import React, { Component } from 'react';
import styled  from 'styled-components';
import data from './data.json';
import DataRow from './DataRow';

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

  renderHeader = () => {
    if (this.state.keys.length > 0) {
      return this.state.keys.map((key, index) => (
        <Key
          key={index}
          address={key === 'address'}>
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
`;

const Table = styled.div`
  width: 100%;
`;


const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafbfc;
  padding: 20px 0 20px 14px;
  border-bottom: 1px solid #e1e4e8;
`;

const Key = styled.span`
  width: ${({ address }) => address ? 150 : 100}px;
  text-transform: capitalize;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
