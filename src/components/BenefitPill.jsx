import React from 'react';
import {spring,useCurrentFrame,useVideoConfig} from 'remotion';

export const BenefitPill=({label,delay=0})=>{
 const frame=useCurrentFrame(); const {fps}=useVideoConfig();
 const p=spring({fps,frame:Math.max(0,frame-delay),config:{damping:12,stiffness:180}});
 return <div style={{
  display:'flex',alignItems:'center',gap:22,padding:'22px 30px',borderRadius:999,
  background:'rgba(5,12,7,.82)',border:'2px solid rgba(99,240,111,.7)',
  color:'#fff',fontWeight:900,fontSize:42,boxShadow:'0 12px 40px rgba(0,0,0,.36)',
  transform:`translateX(${(1-p)*130}px) scale(${.9+.1*p})`,opacity:p
 }}><span style={{display:'inline-flex',width:44,height:44,borderRadius:'50%',background:'#63f06f',color:'#061007',alignItems:'center',justifyContent:'center'}}>✓</span>{label}</div>
}
