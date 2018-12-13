import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_0 from './assets/hope/videos/1.mp4';
import img_0 from './assets/hope/videos/1.mp4.png';
import video_1 from './assets/hope/videos/2.mp4';
import img_1 from './assets/hope/videos/2.mp4.png';
import video_2 from './assets/hope/videos/3.mp4';
import img_2 from './assets/hope/videos/3.mp4.png';
import video_3 from './assets/hope/videos/4.mp4';
import img_3 from './assets/hope/videos/4.mp4.png';
import video_4 from './assets/hope/videos/5.mp4';
import img_4 from './assets/hope/videos/5.mp4.png';
import video_5 from './assets/hope/videos/6.mp4';
import img_5 from './assets/hope/videos/6.mp4.png';
import video_6 from './assets/hope/videos/7.mp4';
import img_6 from './assets/hope/videos/7.mp4.png';
import video_7 from './assets/hope/videos/10.webm';
import img_7 from './assets/hope/videos/10.webm.png';
import video_8 from './assets/hope/videos/8.webm';
import img_8 from './assets/hope/videos/8.webm.png';
import video_9 from './assets/hope/videos/9.webm';
import img_9 from './assets/hope/videos/9.webm.png';
import img_10 from './assets/hope/pics/1.png';
import img_11 from './assets/hope/pics/2.jpg';
import img_12 from './assets/hope/pics/3.jpg';
import img_13 from './assets/hope/pics/4.jpg';
import img_14 from './assets/hope/pics/5.jpg';
import img_15 from './assets/hope/pics/6.jpg';

export default class Hope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: video_0,
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
            <Player ref="player" loop fluid={false} width={350}>
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
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_0})}>
            <img src={img_0} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_1})}>
            <img src={img_1} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_2})}>
            <img src={img_2} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_3})}>
            <img src={img_3} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_4})}>
            <img src={img_4} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_5})}>
            <img src={img_5} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_6})}>
            <img src={img_6} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_7})}>
            <img src={img_7} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_8})}>
            <img src={img_8} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_9})}>
            <img src={img_9} style={{height: '20vh'}} />
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
          <div style={{padding: '1vh' }}>
            <img src={img_14} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_15} style={{height: '80vh'}} />
          </div>
      </div>
    </div>
    );
  }
}
