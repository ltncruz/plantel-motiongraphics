import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';

export const BackgroundImage = ({src='images/eear-entrada.png', zoomFrom=1, zoomTo=1.12, dark=0.36, focus='50% 50%'}) => {
  const frame=useCurrentFrame();
  const scale=interpolate(frame,[0,150],[zoomFrom,zoomTo],{extrapolateRight:'clamp'});
  return <AbsoluteFill style={{overflow:'hidden'}}>
    <Img src={staticFile(src)} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:focus,transform:`scale(${scale})`}}/>
    <AbsoluteFill style={{background:`rgba(0,0,0,${dark})`}}/>
    <AbsoluteFill style={{background:'radial-gradient(circle at 50% 42%, transparent 38%, rgba(0,0,0,.46) 100%)'}}/>
  </AbsoluteFill>;
};
