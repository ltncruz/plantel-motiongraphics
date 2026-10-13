import React from 'react';
import {Composition} from 'remotion';
import {ReelSimuladoEEAR} from './compositions/ReelSimuladoEEAR';

export const Root = () => {
  return (
    <Composition
      id="SimuladoEEAR"
      component={ReelSimuladoEEAR}
      width={1080}
      height={1920}
      fps={30}
      durationInFrames={900}
    />
  );
};
