import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_0 from './assets/sm/videos/10.mp4';
import img_0 from './assets/sm/videos/10.mp4.png';
import video_1 from './assets/sm/videos/11.mp4';
import img_1 from './assets/sm/videos/11.mp4.png';
import video_2 from './assets/sm/videos/12.mp4';
import img_2 from './assets/sm/videos/12.mp4.png';
import video_3 from './assets/sm/videos/13.mp4';
import img_3 from './assets/sm/videos/13.mp4.png';
import video_4 from './assets/sm/videos/14.mp4';
import img_4 from './assets/sm/videos/14.mp4.png';
import video_5 from './assets/sm/videos/15.mp4';
import img_5 from './assets/sm/videos/15.mp4.png';
import video_6 from './assets/sm/videos/16.mp4';
import img_6 from './assets/sm/videos/16.mp4.png';
import video_7 from './assets/sm/videos/17.mp4';
import img_7 from './assets/sm/videos/17.mp4.png';
import video_8 from './assets/sm/videos/18.mp4';
import img_8 from './assets/sm/videos/18.mp4.png';
import video_9 from './assets/sm/videos/19.mp4';
import img_9 from './assets/sm/videos/19.mp4.png';
import video_10 from './assets/sm/videos/2.mp4';
import img_10 from './assets/sm/videos/2.mp4.png';
import video_11 from './assets/sm/videos/20.mp4';
import img_11 from './assets/sm/videos/20.mp4.png';
import video_12 from './assets/sm/videos/21.mp4';
import img_12 from './assets/sm/videos/21.mp4.png';
import video_13 from './assets/sm/videos/22.mp4';
import img_13 from './assets/sm/videos/22.mp4.png';
import video_14 from './assets/sm/videos/3.mp4';
import img_14 from './assets/sm/videos/3.mp4.png';
import video_15 from './assets/sm/videos/4.mp4';
import img_15 from './assets/sm/videos/4.mp4.png';
import video_16 from './assets/sm/videos/5.mp4';
import img_16 from './assets/sm/videos/5.mp4.png';
import video_17 from './assets/sm/videos/6.mp4';
import img_17 from './assets/sm/videos/6.mp4.png';
import video_18 from './assets/sm/videos/7.mp4';
import img_18 from './assets/sm/videos/7.mp4.png';
import video_19 from './assets/sm/videos/8.mp4';
import img_19 from './assets/sm/videos/8.mp4.png';
import video_20 from './assets/sm/videos/9.mp4';
import img_20 from './assets/sm/videos/9.mp4.png';
import video_21 from './assets/sm/videos/sm4.mp4';
import img_21 from './assets/sm/videos/sm4.mp4.png';
import video_22 from './assets/sm/videos/sm5.mp4';
import img_22 from './assets/sm/videos/sm5.mp4.png';
import video_23 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_15_896.mp4';
import img_23 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_15_896.mp4.png';
import video_24 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_7_814.mp4';
import img_24 from './assets/sm/videos/sophiemudd_22_6_2018_1_29_7_814.mp4.png';
import img_25 from './assets/sm/images/july-19-2018.jpg';
import img_26 from './assets/sm/images/sm.jpg';
import img_27 from './assets/sm/images/sm2.jpg';
import img_28 from './assets/sm/images/sm3.jpg';
import img_29 from './assets/sm/images/sophiemudd_22_6_2018_1_29_29_116.jpg';
import img_30 from './assets/sm/images/sophiemudd_22_6_2018_1_29_36_383.jpg';
import img_31 from './assets/sm/images/sophiemudd_22_6_2018_1_29_44_689.jpg';
import img_32 from './assets/sm/images/sophiemudd_22_6_2018_1_29_47_66.jpg';
import img_33 from './assets/sm/images/flowers.png';
import img_34 from './assets/sm/images/JQxtJfb.gif';
import img_35 from './assets/sm/images/0.jpg';
import img_36 from './assets/sm/images/00.jpg';
import img_37 from './assets/sm/images/000.jpg';
import img_38 from './assets/sm/images/0000.jpg';
import img_sophiemudd_0 from './assets/sm/images/sophiemudd_28435975_201089373991509_5145899462362660864_n.jpg';
import img_sophiemudd_1 from './assets/sm/images/sophiemudd_29716516_1971031269881049_5555671816648785920_n.jpg';
import img_sophiemudd_2 from './assets/sm/images/sophiemudd_35617482_258186048291577_5286594610930384896_n.jpg';
import img_sophiemudd_3 from './assets/sm/images/sophiemudd_36039293_534902310245744_5078556376616140800_n.jpg';
import img_sophiemudd_4 from './assets/sm/images/sophiemudd_36085181_411969452650988_2842422658006515712_n.jpg';
import img_sophiemudd_5 from './assets/sm/images/sophiemudd_36160135_191465511524668_2825511997372628992_n.jpg';
import img_sophiemudd_6 from './assets/sm/images/sophiemudd_36569202_282182549217118_6566539932230221824_n.jpg';
import img_sophiemudd_7 from './assets/sm/images/sophiemudd_36828258_247138699414896_75260149287092224_n.jpg';
import img_sophiemudd_8 from './assets/sm/images/sophiemudd_37707493_377391306123845_2682637243096498176_n.jpg';
import img_sophiemudd_9 from './assets/sm/images/sophiemudd_38291803_214251422586136_5286130836066795520_n.jpg';
import img_sophiemudd_10 from './assets/sm/images/sophiemudd_39902781_1898328150246265_4059503788535316480_n.jpg';
import img_sophiemudd_11 from './assets/sm/images/sophiemudd_40308458_301568963965378_1117984089790601018_n.jpg';
import img_sophiemudd_12 from './assets/sm/images/sophiemudd_40583242_2178776675676805_6915212199142317802_n.jpg';
import img_sophiemudd_13 from './assets/sm/images/sophiemudd_41046772_488092628336414_8121580844574687978_n.jpg';
import img_sophiemudd_14 from './assets/sm/images/sophiemudd_41355647_1675494305910339_5608229503748831487_n.jpg';
import img_sophiemudd_15 from './assets/sm/images/sophiemudd_41658618_1885838294818738_5498712812368863069_n.jpg';
import img_sophiemudd_16 from './assets/sm/images/sophiemudd_42869654_355246145243694_3591634476505718764_n.jpg';
import img_sophiemudd_17 from './assets/sm/images/sophiemudd_42929272_318481355610382_6259426560999966218_n.jpg';
import img_sophiemudd_18 from './assets/sm/images/sophiemudd_44850380_1928101137484767_3037853886444061259_n.jpg';


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
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30}}>
        <a href='https://instagram.com/sophiemudd' target='_blank'>sophiemudd</a>
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
          <div style={{padding: '1vh' }}>
            <img src={img_25} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_26} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_27} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_28} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_29} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_30} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_31} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_32} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_33} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_34} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_35} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_36} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_37} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }}>
            <img src={img_38} style={{height: '80vh'}} />
          </div>
          <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_0})}>
        <img src={img_sophiemudd_0} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_1})}>
        <img src={img_sophiemudd_1} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_2})}>
        <img src={img_sophiemudd_2} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_3})}>
        <img src={img_sophiemudd_3} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_4})}>
        <img src={img_sophiemudd_4} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_5})}>
        <img src={img_sophiemudd_5} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_6})}>
        <img src={img_sophiemudd_6} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_7})}>
        <img src={img_sophiemudd_7} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_8})}>
        <img src={img_sophiemudd_8} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_9})}>
        <img src={img_sophiemudd_9} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_10})}>
        <img src={img_sophiemudd_10} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_11})}>
        <img src={img_sophiemudd_11} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_12})}>
        <img src={img_sophiemudd_12} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_13})}>
        <img src={img_sophiemudd_13} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_14})}>
        <img src={img_sophiemudd_14} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_15})}>
        <img src={img_sophiemudd_15} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_16})}>
        <img src={img_sophiemudd_16} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_17})}>
        <img src={img_sophiemudd_17} style={{height: '80vh'}} />
    </div>
    <div style={{padding: '1vh' }} onClick={() => this.setState({image: img_sophiemudd_18})}>
        <img src={img_sophiemudd_18} style={{height: '80vh'}} />
    </div>
      </div>
    </div>
    );
  }
}
