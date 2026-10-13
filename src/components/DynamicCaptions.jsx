import React from 'react';
import {useCurrentFrame, spring, useVideoConfig} from 'remotion';

const splitHighlight = (text, highlight) => {
  if (!highlight || !text.toUpperCase().includes(highlight.toUpperCase())) return [text, '', ''];
  const idx = text.toUpperCase().indexOf(highlight.toUpperCase());
  return [text.slice(0, idx), text.slice(idx, idx + highlight.length), text.slice(idx + highlight.length)];
};

export const DynamicCaptions = ({items}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const item = items.find((x) => frame >= x.start && frame < x.end);
  if (!item) return null;
  const local = frame - item.start;
  const entrance = spring({fps, frame: local, config: {damping: 15, stiffness: 180}});
  const [before, hi, after] = splitHighlight(item.text, item.highlight);
  return (
    <div style={{
      position: 'absolute', left: 70, right: 70, bottom: 210,
      display: 'flex', justifyContent: 'center', pointerEvents: 'none',
      transform: `translateY(${(1-entrance)*26}px)`, opacity: entrance,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: 900, textAlign: 'center', color: 'white', fontSize: 54,
        fontWeight: 900, lineHeight: 1.08, textShadow: '0 4px 16px rgba(0,0,0,.9)',
        background: 'rgba(0,0,0,.38)', padding: '16px 24px', borderRadius: 22,
        backdropFilter: 'blur(6px)'
      }}>
        {before}<span style={{color:'#63f06f'}}>{hi}</span>{after}
      </div>
    </div>
  );
};
