import React from 'react';
import {AbsoluteFill, Audio, Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const RevealScene=()=>{
 const frame=useCurrentFrame(); const {fps}=useVideoConfig();
 const p=spring({fps,frame,config:{damping:14,stiffness:150}});
 return <AbsoluteFill style={{background:'linear-gradient(#09130b,#020403)',overflow:'hidden'}}>
   <Img src={staticFile('images/questao-01.png')} style={{position:'absolute',width:600,left:10,top:520,transform:'rotate(-10deg)',opacity:.28}}/>
   <Img src={staticFile('images/questao-02.png')} style={{position:'absolute',width:600,right:-20,top:470,transform:'rotate(9deg)',opacity:.24}}/>
   <Img src={staticFile('images/simulado-capa.png')} style={{position:'absolute',width:'100%',height:'100%',objectFit:'cover',transform:`translateY(${(1-p)*170}px) scale(${.92+.08*p})`,opacity:p}}/>
   <Audio src={staticFile('audio/whoosh-02.wav')} volume={0.36}/>
 </AbsoluteFill>
}
