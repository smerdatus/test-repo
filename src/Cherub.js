import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_0 from './assets/cherub/videos/01 g spot vibrator.mp4';
import img_0 from './assets/cherub/videos/01 g spot vibrator.mp4.png';
import video_1 from './assets/cherub/videos/02 butt.mp4';
import img_1 from './assets/cherub/videos/02 butt.mp4.png';
import video_2 from './assets/cherub/videos/03 8 in.mp4';
import img_2 from './assets/cherub/videos/03 8 in.mp4.png';
import video_3 from './assets/cherub/videos/04 6 in.mp4';
import img_3 from './assets/cherub/videos/04 6 in.mp4.png';
import video_4 from './assets/cherub/videos/05 fuck self.mp4';
import img_4 from './assets/cherub/videos/05 fuck self.mp4.png';
import video_5 from './assets/cherub/videos/06 quiet.mp4';
import img_5 from './assets/cherub/videos/06 quiet.mp4.png';
import video_6 from './assets/cherub/videos/07 black lacy naughtiness.mp4';
import img_6 from './assets/cherub/videos/07 black lacy naughtiness.mp4.png';
import video_7 from './assets/cherub/videos/08 panty stuffing and super hard cumming.mp4';
import img_7 from './assets/cherub/videos/08 panty stuffing and super hard cumming.mp4.png';
import video_8 from './assets/cherub/videos/09 sinful lil nun squirts for jesus.mp4';
import img_8 from './assets/cherub/videos/09 sinful lil nun squirts for jesus.mp4.png';
import video_9 from './assets/cherub/videos/10 black swan.mp4';
import img_9 from './assets/cherub/videos/10 black swan.mp4.png';
import video_10 from './assets/cherub/videos/11 practically fisting myself with my magic wand massager.mp4';
import img_10 from './assets/cherub/videos/11 practically fisting myself with my magic wand massager.mp4.png';
import video_11 from './assets/cherub/videos/12 being a naughty lil school girl playin with my pussy.mp4';
import img_11 from './assets/cherub/videos/12 being a naughty lil school girl playin with my pussy.mp4.png';
import video_12 from './assets/cherub/videos/13 slutty schoolgirl discovers magic wand massager.mp4';
import img_12 from './assets/cherub/videos/13 slutty schoolgirl discovers magic wand massager.mp4.png';
import video_13 from './assets/cherub/videos/14 making myself moan in my prettiest matching blue lace lingerie.mp4';
import img_13 from './assets/cherub/videos/14 making myself moan in my prettiest matching blue lace lingerie.mp4.png';
import video_14 from './assets/cherub/videos/15 the most perfect ease of access pyjamas.mp4';
import img_14 from './assets/cherub/videos/15 the most perfect ease of access pyjamas.mp4.png';
import video_15 from './assets/cherub/videos/16 dick riding and anal play with some ben wa balls.mp4';
import img_15 from './assets/cherub/videos/16 dick riding and anal play with some ben wa balls.mp4.png';
import video_16 from './assets/cherub/videos/17 feelin super cute and super horny.mp4';
import img_16 from './assets/cherub/videos/17 feelin super cute and super horny.mp4.png';
import video_17 from './assets/cherub/videos/18 neflix and made myself cum hard.mp4';
import img_17 from './assets/cherub/videos/18 neflix and made myself cum hard.mp4.png';
import video_18 from './assets/cherub/videos/19 finger fucking myself in the mirror... and i put my pretty diamond buttplug in.mp4';
import img_18 from './assets/cherub/videos/19 finger fucking myself in the mirror... and i put my pretty diamond buttplug in.mp4.png';
import video_19 from './assets/cherub/videos/20 a coconut oil self-massage.mp4';
import img_19 from './assets/cherub/videos/20 a coconut oil self-massage.mp4.png';
import video_20 from './assets/cherub/videos/21 gettin so horny in my lil cute bedtime romper.mp4';
import img_20 from './assets/cherub/videos/21 gettin so horny in my lil cute bedtime romper.mp4.png';
import video_21 from './assets/cherub/videos/22 he made me cum with his.mp4';
import img_21 from './assets/cherub/videos/22 he made me cum with his.mp4.png';
import video_22 from './assets/cherub/videos/23 a lil self-fuck practise.mp4';
import img_22 from './assets/cherub/videos/23 a lil self-fuck practise.mp4.png';
import video_23 from './assets/cherub/videos/24 riding till i cum my heart out.mp4';
import img_23 from './assets/cherub/videos/24 riding till i cum my heart out.mp4.png';
import video_24 from './assets/cherub/videos/25 being a bad little bunny.mp4';
import img_24 from './assets/cherub/videos/25 being a bad little bunny.mp4.png';
import video_25 from './assets/cherub/videos/26 the first sexual video i ever took.mp4';
import img_25 from './assets/cherub/videos/26 the first sexual video i ever took.mp4.png';


export default class Cherub extends Component {
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
            <Player ref="player" fluid={false} height={700}>
              <source src={this.state.video} />
            </Player>
        </div>
        {this.state.oldY === 0 ? '' : (
          <div padding={{padding: '2vh'}} onClick={() => this.scrollBackDown()} >
            <button class="pure-button pure-button-primary">Return to previous position</button>
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
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_14})}>
              <img src={img_14} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_15})}>
              <img src={img_15} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_16})}>
              <img src={img_16} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_17})}>
              <img src={img_17} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_18})}>
              <img src={img_18} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_19})}>
              <img src={img_19} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_20})}>
              <img src={img_20} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_21})}>
              <img src={img_21} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_22})}>
              <img src={img_22} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_23})}>
              <img src={img_23} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_24})}>
              <img src={img_24} style={{height: '20vh'}} />
            </div>
            <div style={{padding: '1vh' }} onClick={() => this.setState({video: video_25})}>
              <img src={img_25} style={{height: '20vh'}} />
            </div>
       </div>
       <div id="images">
        <div style={{paddingBottom: 50}}>
          <blockquote class="imgur-embed-pub" lang="en" data-id="a/Lt5X3vO" data-context="false"><a href="//imgur.com/a/Lt5X3vO">che1</a></blockquote>
        </div>
        <div style={{paddingBottom: 50}}>
          <blockquote class="imgur-embed-pub" lang="en" data-id="a/ECB2n8M" data-context="false"><a href="//imgur.com/a/ECB2n8M">che2</a></blockquote>
        </div>
        <div style={{paddingBottom: 50}}>
          <blockquote class="imgur-embed-pub" lang="en" data-id="a/FAyhtYj" data-context="false"><a href="//imgur.com/a/FAyhtYj">che3</a></blockquote>
        </div>
        <div style={{paddingBottom: 50}}>
          <blockquote class="imgur-embed-pub" lang="en" data-id="a/jNSCXqV" data-context="false"><a href="//imgur.com/a/jNSCXqV">che4</a></blockquote>
        </div>
        <div style={{paddingBottom: 50}}>
          <blockquote class="imgur-embed-pub" lang="en" data-id="a/pr168Pl" data-context="false"><a href="//imgur.com/a/pr168Pl">che5</a></blockquote>
        </div>
        <div style={{paddingBottom: 50}}>
          <blockquote class="imgur-embed-pub" lang="en" data-id="a/aBVNHw2" data-context="false"><a href="//imgur.com/a/aBVNHw2">che6</a></blockquote>
        </div>
    </div>
    </div>
    );
  }
}
