import React from 'react';
import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {QuestionCard} from '../components/QuestionCard';
import {KineticText} from '../components/KineticText';

export const RealityScene=()=> <AbsoluteFill style={{background:'linear-gradient(160deg,#050805,#0d1b10)'}}>
 <QuestionCard src="images/questao-01.png" x={-900} y={-90} rotate={-7} delay={0} width={650}/>
 <QuestionCard src="images/questao-02.png" x={900} y={120} rotate={6} delay={10} width={620}/>
 <AbsoluteFill style={{alignItems:'center',justifyContent:'center',padding:'0 80px 260px'}}>
  <KineticText top="VOCÊ ESTÁ" bottom="REALMENTE PREPARADO?" start={18} size={88}/>
 </AbsoluteFill>
 <Audio src={staticFile('audio/whoosh-01.wav')} volume={0.35}/>
</AbsoluteFill>
