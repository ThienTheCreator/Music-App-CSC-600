import P5 from 'p5';
import * as Tone from 'tone';
// project imports
import { Visualizer } from '../Visualizers';

export const testvis = new Visualizer(
  'Test Vis',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const space_between_lines = (width/2) / 64
    const height = window.innerHeight / 2;    
    analyzer.type = 'fft'

    
    const values = analyzer.getValue();    

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
        p5.fill(i*3,255,255); //fill(i,255,255);
        let amp = values[i] as number;
        let y = p5.map(amp, 0, 256, height, 350);
        p5.rect((width/2) + (i * space_between_lines), y, space_between_lines, height - y);
        p5.rect((width/2) - (i * space_between_lines), y, space_between_lines, height - y);
      }
    p5.endShape();
  },
);