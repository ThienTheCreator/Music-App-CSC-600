// 3rd party library imports
import { NotSentFilled32 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
import { StereoFeedbackEffect } from 'tone/build/esm/effect/StereoFeedbackEffect';
import { SideNav } from '../SideNav';

// project imports
import { Visualizer } from '../Visualizers';

var fft
export const trumanWaveVisualizer = new Visualizer(
  'Truman Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    const values = analyzer.getValue();

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    p5.beginShape()
    for(var i = 0; i < values.length; i++){
      var index = p5.floor(p5.map(i,0,width,0,values.length))
      const amplitude = values[index] as number;

      var x = p5.map(i, 0, values.length - 1, 0, width);
      var y = amplitude * 300 + height / 2;
      p5.vertex(x,y)
    }
    p5.endShape();

    p5.translate(width / 2.5, height / 2);
    for(var t = -1; t <= 1; t +=2){
    p5.beginShape()
    for(var i = 0; i <= 180; i++){
      var index = p5.floor(p5.map(i,0,180,0,values.length -1))
      const amplitude = values[index] as number;

      var r = p5.map(amplitude, -1, 1, 150, 350)

      var x = r * p5.sin(i) *t
      var y = r * p5.cos(i)

      p5.vertex(x,y)
  
  }
    p5.endShape()
    }



    p5.ellipse(0, 0, 200);

    for (let i = 0; i < values.length; i++) {
      p5.rotate(values.length);
      p5.stroke("white");
      p5.line(10, 100, 0, Number(values[i]) * 200);
    }
    
  },
);
