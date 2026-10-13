import React from 'react';
import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {BackgroundImage} from '../components/BackgroundImage';
import {KineticText} from '../components/KineticText';

export const EmotionalScene=()=> <AbsoluteFill>
 <BackgroundImage zoomFrom={1.10} zoomTo={1.23} dark={0.44} focus="50% 43%"/>
 <AbsoluteFill style={{alignItems:'center',justifyContent:'center',padding:'0 75px 280px'}}>
  <KineticText top="TREINE HOJE." bottom="ESTEJA PRONTO NO DIA." start={10} size={91}/>
 </AbsoluteFill>
 <Audio src={staticFile('audio/riser.wav')} volume={0.24}/>
</AbsoluteFill>
