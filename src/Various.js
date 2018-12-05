import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_0 from './assets/various/videos/20.mp4';
import img_0 from './assets/various/videos/20.mp4.png';
import video_1 from './assets/various/videos/31.mp4';
import img_1 from './assets/various/videos/31.mp4.png';
import video_2 from './assets/various/videos/32.mp4';
import img_2 from './assets/various/videos/32.mp4.png';
import video_3 from './assets/various/videos/33.mp4';
import img_3 from './assets/various/videos/33.mp4.png';
import video_4 from './assets/various/videos/41.mp4';
import img_4 from './assets/various/videos/41.mp4.png';
import video_5 from './assets/various/videos/42.mp4';
import img_5 from './assets/various/videos/42.mp4.png';
import video_6 from './assets/various/videos/43.mp4';
import img_6 from './assets/various/videos/43.mp4.png';
import video_7 from './assets/various/videos/1.webm';
import img_7 from './assets/various/videos/1.webm.png';
import video_8 from './assets/various/videos/2.webm';
import img_8 from './assets/various/videos/2.webm.png';
import video_9 from './assets/various/videos/21.webm';
import img_9 from './assets/various/videos/21.webm.png';
import video_10 from './assets/various/videos/3.webm';
import img_10 from './assets/various/videos/3.webm.png';
import video_11 from './assets/various/videos/4.webm';
import img_11 from './assets/various/videos/4.webm.png';
import video_12 from './assets/various/videos/5.webm';
import img_12 from './assets/various/videos/5.webm.png';
import video_13 from './assets/various/videos/6.webm';
import img_13 from './assets/various/videos/6.webm.png';

export default class Various extends Component {
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
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_10})}>
            <img src={img_10} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_11})}>
            <img src={img_11} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_12})}>
            <img src={img_12} style={{height: '20vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_13})}>
            <img src={img_13} style={{height: '20vh'}} />
          </div>
        {/* https://imgur.com/a/oDqZqV2
        https://imgur.com/a/Ll8WYDG
        https://imgur.com/a/bE8z4ov */}
      </div>
    </div>
    );
  }
}
