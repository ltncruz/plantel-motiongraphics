import React from 'react';
import {AbsoluteFill, Audio, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const CtaScene=()=>{
 const f=useCurrentFrame();
 const pulse=1+0.025*Math.sin(f/7);
 const logoOpacity=interpolate(f,[0,15],[0,1],{extrapolateRight:'clamp'});
 return <AbsoluteFill style={{background:'radial-gradient(circle at 50% 34%,#17351d 0%,#050805 58%,#020302 100%)',overflow:'hidden'}}>
  <Img src={staticFile('images/simulado-capa.png')} style={{position:'absolute',width:780,bottom:170,left:150,transform:'rotate(-2deg)',filter:'drop-shadow(0 30px 55px rgba(0,0,0,.65))'}}/>
  <Img src={staticFile('images/logo-plantel.png')} style={{position:'absolute',width:650,top:120,left:215,opacity:logoOpacity}}/>
  <div style={{position:'absolute',top:500,left:0,right:0,textAlign:'center',color:'#fff',fontWeight:1000,textShadow:'0 5px 25px #000'}}>
    <div style={{fontSize:88}}>SIMULADO</div>
    <div style={{fontSize:128,color:'#63f06f'}}>GRATUITO</div>
    <div style={{marginTop:30,fontSize:58,transform:`scale(${pulse})`,display:'inline-block',padding:'18px 34px',border:'3px solid #63f06f',borderRadius:20}}>ACESSE PELO LINK</div>
  </div>
  <Audio src={staticFile('audio/hit-final.wav')} volume={0.44}/>
 </AbsoluteFill>
}
