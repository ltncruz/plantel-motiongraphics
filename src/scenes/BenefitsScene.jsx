import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BenefitPill} from '../components/BenefitPill';

export const BenefitsScene=()=>{
 const f=useCurrentFrame();
 const scale=interpolate(f,[0,210],[1.02,1.10]);
 return <AbsoluteFill style={{background:'#040704',overflow:'hidden'}}>
   <Img src={staticFile('images/simulado-capa.png')} style={{position:'absolute',width:'100%',height:'100%',objectFit:'cover',filter:'brightness(.35) blur(1px)',transform:`scale(${scale})`}}/>
   <AbsoluteFill style={{background:'linear-gradient(90deg,rgba(0,0,0,.75),rgba(0,0,0,.3))'}}/>
   <div style={{position:'absolute',left:65,top:330,display:'flex',flexDirection:'column',gap:34}}>
     <BenefitPill label="QUESTÕES ATUALIZADAS" delay={5}/>
     <BenefitPill label="MESMO NÍVEL DA EEAR" delay={38}/>
     <BenefitPill label="TODAS AS DISCIPLINAS" delay={71}/>
     <BenefitPill label="GABARITO PARA CONFERIR" delay={104}/>
   </div>
   <Audio src={staticFile('audio/click.wav')} startFrom={0} volume={0.4}/>
 </AbsoluteFill>
}
