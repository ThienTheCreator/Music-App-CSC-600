import P5 from "p5";
import * as Tone from "tone";

import { Visualizer } from "../Visualizers";

export const newformVisualizer = new Visualizer(
  "newform",
  (p5: P5, analyzer: Tone.Analyser) => {
  
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();

    var pieces = values.length;
    var radius = 200;
    p5.background(230);

    for (let i = 0; i < values.length; i++) {
      const unitHeight = Math.floor(height);
      const averageWidth = width / values.length;
      const x = i * averageWidth;
      const y = Math.floor(height /4) - unitHeight * Number(values[i]);
      p5.rect(x*2, y + 40, averageWidth, unitHeight * Number(values[i]));
    }

  
    p5.translate(width / 2.5, height / 1.5);
    p5.stroke(0, 0, 255);
    p5.ellipse(0, 0, radius);

    for (let i = 0; i < pieces; i++) {
      p5.rotate((Math.PI * 2) / pieces);
      p5.stroke(255, 0, 0);
      p5.line(10, radius / 2, 0, Number(values[i]) * radius);
    }

   
}
);