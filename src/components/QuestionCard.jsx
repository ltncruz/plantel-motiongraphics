import React from 'react';
import {Img, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const QuestionCard = ({src, x=0, y=0, rotate=0, delay=0, width=620, opacity=.95}) => {
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const p=spring({fps,frame:Math.max(0,frame-delay),config:{damping:13,stiffness:150}});
  return <Img src={staticFile(src)} style={{
    position:'absolute', width, left:'50%', top:'50%',
    transform:`translate(-50%,-50%) translate(${x*(1-p)}px, ${y*(1-p)}px) rotate(${rotate*p}deg) scale(${0.82+0.18*p})`,
    opacity:p*opacity, borderRadius:18, boxShadow:'0 30px 70px rgba(0,0,0,.55)'
  }}/>;
};
