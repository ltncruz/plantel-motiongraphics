import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const KineticText = ({top, bottom, start=0, align='center', size=92}) => {
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const local=Math.max(0,frame-start);
  const s=spring({fps,frame:local,config:{damping:14,stiffness:190}});
  const tracking=interpolate(s,[0,1],[10,1]);
  return <div style={{textAlign:align, transform:`scale(${0.92+0.08*s}) translateY(${(1-s)*30}px)`, opacity:s}}>
    <div style={{fontSize:size*.56,fontWeight:700,color:'#fff',letterSpacing:tracking,textShadow:'0 4px 20px #000'}}>{top}</div>
    <div style={{fontSize:size,fontWeight:1000,color:'#63f06f',letterSpacing:tracking,textShadow:'0 5px 24px #000'}}>{bottom}</div>
  </div>;
};
