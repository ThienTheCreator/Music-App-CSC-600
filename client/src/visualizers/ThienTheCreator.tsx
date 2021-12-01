// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const Spiral = new Visualizer(
  'Spiral',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight/2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);
    
    // p5.beginShape();
    // for (let i = 0; i < values.length; i++) {
    //   const amplitude = values[i] as number;
    //   const x = p5.map(i, 0, values.length - 1, 0, w);
    //   const y = height / 2 + amplitude * height;

    //   p5.vertex(x, y);
    // }
    // p5.endShape();
    
    const values = analyzer.getValue();
    var w = width - 256;
    
    p5.beginShape();
    
    var angle = 0;
    var rainbow = [
      [255, 0 , 0],
      [255, 127, 0],
      [255, 255, 0],
      [0, 255, 0],
      [	0, 0, 255],
      [75, 0, 130],
      [148, 0, 211]
    ];
    var j = 0;
    for(let i = 0; i < values.length; i++){
      const amplitude = values[i%values.length] as number;

      var radius = 50;
    
      radius = 100 + amplitude * 500;
      var x = w/2 + radius * Math.cos(angle);
      var y = height/2 + radius * Math.sin(angle);

      p5.stroke(rainbow[j][0],rainbow[j][1],rainbow[j][2],150);
      j += 1;
      if(j > 6){
        j = 0;
      }

      p5.strokeWeight(dim * 0.015);
      p5.point(x, y);
      angle += .0245;
      
    }
    p5.strokeWeight(dim * 0.015);
    p5.endShape();
  },
);
