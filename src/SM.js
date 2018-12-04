import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_1 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_15_896.mp4';
import img_1 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_15_896.mp4.png';
import video_2 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_7_814.mp4';
import img_2 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_7_814.mp4.png';
import video_3 from './assets/sm/videos/sm4.webm';
import img_3 from './assets/sm/videos/sm4.webm.png';
import video_4 from './assets/sm/videos/sm5.webm';
import img_4 from './assets/sm/videos/sm5.webm.png';
import img_5 from './assets/sm/images/july-19-2018.jpg';
import img_6 from './assets/sm/images/sm.jpg';
import img_7 from './assets/sm/images/sm2.jpg';
import img_8 from './assets/sm/images/sm3.jpg';
import img_9 from './assets/sm/images/sophiemudd_22_6_2018_1_29_29_116.jpg';
import img_10 from './assets/sm/images/sophiemudd_22_6_2018_1_29_36_383.jpg';
import img_11 from './assets/sm/images/sophiemudd_22_6_2018_1_29_44_689.jpg';
import img_12 from './assets/sm/images/sophiemudd_22_6_2018_1_29_47_66.jpg';
import img_13 from './assets/sm/images/flowers.png';
import img_14 from './assets/sm/images/JQxtJfb.gif';

export default class SM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: video_3,
      oldY: 0
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video) {
      this.setState({oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop});
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <div style={{padding: '1vh'}}>
            <Player ref="player" fluid={false} width={350}>
              <source src={this.state.video} />
            </Player>
        </div>
        {this.state.oldY === 0 ? '' : (
          <div padding={{padding: '2vh'}} onClick={() => this.scrollBackDown()} >
            <button className="pure-button pure-button-primary">Return to previous position</button>
        </div>
        )}
      </div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_3})}>
            <img src={img_3} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_1})}>
            <img src={img_1} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_2})}>
            <img src={img_2} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_4})}>
            <img src={img_4} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_14} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_5} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_6} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_7} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_8} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_9} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_10} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_11} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_12} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_13} style={{height: '80vh'}} />
          </div>
      </div>
    </div>
    );
  }
}
