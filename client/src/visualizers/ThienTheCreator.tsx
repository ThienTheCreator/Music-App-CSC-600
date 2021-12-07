// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const Spiral = new Visualizer(
  'Spiral',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    const values = analyzer.getValue();
    var w = width - 256;

    var angle = 0;
    var rainbow = [
      [255, 0, 0],
      [255, 127, 0],
      [255, 255, 0],
      [0, 255, 0],
      [0, 0, 255],
      [75, 0, 130],
      [148, 0, 211]
    ];
    var j = 0;
    var k = 0;

    p5.beginShape();
    for (let i = 0; i < values.length * 2; i++) {
      if (k >= values.length) {
        k = 0;
      }

      p5.stroke(rainbow[j][0], rainbow[j][1], rainbow[j][2], 150);

      const amplitude = values[k] as number;

      var radius = 100 + amplitude * 400;
      var x = w * 3 / 4 + radius * Math.cos(angle);
      var y = height / 2 + radius * Math.sin(angle);

      j += 1;
      if (j > 6) {
        j = 0;
      }

      p5.strokeWeight(dim * 0.015);
      p5.point(x, y);
      angle += .0122;

      if(i < values.length){
        radius = 100 + amplitude * 400;
        x = w / 4 + radius * Math.cos(angle*2);
        y = height / 2 + radius * Math.sin(angle*2);
        p5.point(x, y);
      }      

      k += 1;
    }
    p5.strokeWeight(dim * 0.015);
    p5.endShape();
  },
);
