import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactPlayer from 'react-player';
import './style.css';


//const params = new URLSearchParams(window.location.search);
//const paramValue = params.get("url");


const paramValue = "https://res.cloudinary.com/wikacy-com/video/upload/q_auto/v1651114173/promos/superior-rahil-boobaram-visualization_hxtxv0.mp4"



 

const App: React.FC = () => (
  <div>
    <ReactPlayer url={paramValue}
    
    light
    playing={true}   
    controls
    preload
    disableRemotePlayback={true}
    allowFullscreen ={false}
    playbackrate= {false}
    config={{ file: { attributes: { controlsList: 'nodownload noplaybackrate nofullscreen noremoteplayback',disablePictureInPicture: true } } }}
    width='100%'
    height='100%'
    playIcon={<img src="https://res.cloudinary.com/wikacy-com/image/upload/c_scale,w_250/v1636534987/favicon_1_-removebg-preview.png"/>}
    
     />
  </div>
);

render(<App />, document.getElementById('root'));
