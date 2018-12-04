import React, { Component } from 'react';
import NTF from './NTF';
import Cherub from './Cherub';
import SM from './SM';
import CK from './CK';
import Hope from './Hope';
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
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20}}>
        <div onClick={() => this.setState({person: 'hide'})} style={{paddingBottom: 10}}>
          <button class="pure-button pure-button-primary">Hide</button>
        </div>
        <div onClick={() => this.setState({person: 'Cherub'})} style={{paddingBottom: 10}}>
          <button class="pure-button pure-button-primary">Cherub</button>
        </div>
        <div onClick={() => this.setState({person: 'NTF'})} style={{paddingBottom: 10}}>
            <button class="pure-button pure-button-primary">NTF</button>
        </div>
        <div onClick={() => this.setState({person: 'SM'})} style={{paddingBottom: 10}}>
            <button class="pure-button pure-button-primary">SM</button>
        </div>
        <div onClick={() => this.setState({person: 'various'})} style={{paddingBottom: 10}}>
            <button class="pure-button pure-button-primary">Var</button>
        </div>
        <div onClick={() => this.setState({person: 'CK'})} style={{paddingBottom: 10}}>
            <button class="pure-button pure-button-primary">CK</button>
        </div>
        <div onClick={() => this.setState({person: 'hope'})} style={{paddingBottom: 10}}>
            <button class="pure-button pure-button-primary">Hope</button>
        </div>
        <a href="https://smerdatus.com/sd" style={{paddingBottom: 10}}>
            <button class="pure-button pure-button-primary">SD</button>
        </a>
        <a href="https://smerdatus.com/l" style={{paddingBottom: 10}}>
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
    } else if (this.state.person === 'CK') {
      return (
        <div>
          {this.renderButtons()}
          <CK />
        </div>
      );
    } else if (this.state.person === 'hope') {
      return (
        <div>
          {this.renderButtons()}
          <Hope />
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
