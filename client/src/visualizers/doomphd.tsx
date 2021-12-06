// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const trumanWaveVisualizer = new Visualizer(
  'Truman Waveform',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    // p5.background(0, 0, 0, 255);

    // p5.strokeWeight(dim * 0.01);
    // p5.stroke(255, 255, 255, 255);
    // p5.noFill();

    // // const values = analyzer.getValue();
    // p5.beginShape();
    // for (let i = 0; i < 360; i++) {
    //   const amplitude = values[i] as number;
    //   const x = p5.map(i, 0, values.length - 1, 0, width);
    //   const y = height / 2 + amplitude * height;
    //   // Place vertex
    //   p5.vertex(x, y);
    // }

    // p5.endShape();
    // p5.strokeWeight(dim * 0.025);
    // p5.background(0, 0, 0, 255);
    // p5.stroke("blue");
    // p5.noFill();
    // p5.angleMode('degrees');
    // p5.translate(width/2, height/2);
    // const values = analyzer.getValue();
    // for (let t = -1; t <= 1; t += 2) {
    //   p5.beginShape();
    //   for (let i = 0; i <= 180; i += 0.5) {
    //     const index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1));
    //     const amplitude = values[index] as number;
    //     const r = p5.map(amplitude, -1, 1, 150, 300);
    //     const x = r * p5.sin(i) *t;
    //     const y = r * p5.cos(i);
    //     // Place vertex
    //     p5.vertex(x, y);
    //   }
    
    p5.strokeWeight(dim * 0.025);
    p5.background(0, 0, 0, 255);
    p5.stroke("blue");
    p5.noFill();
    p5.translate(width/2.5, height/2.5);
    const values = analyzer.getValue();
      p5.beginShape();
      //17.6 is pentagon
      for (let i = 0; i <= 360; i += 17.6) {
        const index = p5.floor(p5.map(i, 0, 180, 0, values.length - 1));
        const amplitude = values[index] as number;
        //const r = p5.map(amplitude, -1, 1, 150, 300);
        const t = p5.map(Math.cos(i), 0, 1, amplitude * 40, 300);
        const r = p5.map(Math.sin(i), 0, 1, amplitude * 40, 300);

        const x = r * p5.sin(i) ;
        const y = r * p5.cos(i);
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
    
  },
);
