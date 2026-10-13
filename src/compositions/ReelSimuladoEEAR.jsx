import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {HookScene} from '../scenes/HookScene';
import {RealityScene} from '../scenes/RealityScene';
import {RevealScene} from '../scenes/RevealScene';
import {BenefitsScene} from '../scenes/BenefitsScene';
import {EmotionalScene} from '../scenes/EmotionalScene';
import {CtaScene} from '../scenes/CtaScene';
import {DynamicCaptions} from '../components/DynamicCaptions';
import {captions} from '../data/captions';

export const ReelSimuladoEEAR = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#050805', fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <Sequence from={0} durationInFrames={135}><HookScene /></Sequence>
      <Sequence from={135} durationInFrames={105}><RealityScene /></Sequence>
      <Sequence from={240} durationInFrames={150}><RevealScene /></Sequence>
      <Sequence from={390} durationInFrames={210}><BenefitsScene /></Sequence>
      <Sequence from={600} durationInFrames={150}><EmotionalScene /></Sequence>
      <Sequence from={750} durationInFrames={150}><CtaScene /></Sequence>

      <Audio src={staticFile('audio/narracao.wav')} volume={1} />
      <Audio src={staticFile('audio/musica.wav')} volume={0.16} />

      <DynamicCaptions items={captions} />
    </AbsoluteFill>
  );
};
