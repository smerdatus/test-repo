import React, { Component } from 'react';
import NTF from './NTF';
import Cherub from './Cherub';
import SM from './SM';
import Various from './Various';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: 'hide'
    };
  }

  renderButtons = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'space-around', padding: 30}}>
        <div onClick={() => this.setState({person: 'hide'})} >
          <button class="pure-button pure-button-primary">Hide</button>
        </div>
        <div onClick={() => this.setState({person: 'Cherub'})} >
          <button class="pure-button pure-button-primary">Cherub</button>
        </div>
        <div onClick={() => this.setState({person: 'NTF'})} >
            <button class="pure-button pure-button-primary">NTF</button>
        </div>
        <div onClick={() => this.setState({person: 'SM'})} >
            <button class="pure-button pure-button-primary">SM</button>
        </div>
        <div onClick={() => this.setState({person: 'various'})} >
            <button class="pure-button pure-button-primary">Var</button>
        </div>
        <a href="https://smerdatus.com/sd">
            <button class="pure-button pure-button-primary">SD</button>
        </a>
        <a href="https://smerdatus.com/l">
            <button class="pure-button pure-button-primary">L</button>
        </a>
      </div>
      );
  }

  render() {
    if (this.state.person === 'hide') {
      return (
      <div>
        {this.renderButtons()}
      </div>
      )
    }
    else if (this.state.person === 'NTF') {
      return (
        <div>
          {this.renderButtons()}
          <NTF />
        </div>
      );
    }
    else if (this.state.person === 'Cherub') {
      return (
        <div>
          {this.renderButtons()}
          <Cherub />
        </div>
      );
    } else if (this.state.person === 'SM') {
      return (
        <div>
          {this.renderButtons()}
          <SM />
        </div>
      );
    } else if (this.state.person === 'various') {
      return (
        <div>
          {this.renderButtons()}
          <Various />
        </div>
      );
    } else {
      return (
        <div>Error</div>
      )
    }
  }
}
