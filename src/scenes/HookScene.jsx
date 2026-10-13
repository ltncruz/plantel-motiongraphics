import React from 'react';
import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BackgroundImage} from '../components/BackgroundImage';
import {KineticText} from '../components/KineticText';

export const HookScene=()=>{
 const f=useCurrentFrame();
 const shade=interpolate(f,[0,25],[0,.18],{extrapolateRight:'clamp'});
 return <AbsoluteFill>
   <BackgroundImage zoomFrom={1.02} zoomTo={1.18} dark={0.28+shade} focus="50% 44%"/>
   <Audio src={staticFile('audio/impact.wav')} volume={0.45}/>
   <AbsoluteFill style={{alignItems:'center',justifyContent:'center',padding:'0 90px 300px'}}>
     <KineticText top="JÁ SONHOU" bottom="EM ESTAR AQUI?" start={12} size={105}/>
   </AbsoluteFill>
 </AbsoluteFill>
}
