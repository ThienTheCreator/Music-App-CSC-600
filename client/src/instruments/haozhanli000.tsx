import * as Tone from "tone";

import { Instrument, InstrumentProps } from "../Instruments";
import guitarImage from "../img/guitar.svg";
import styles from "../guitar-style.module.css";
import { fromJS } from 'immutable';
interface GuitarLineProps {
  notes: string[];
  index: number;
  duration?: string;
  synth?: Tone.Synth;
}

export function GuitarLine({
  index,
  synth,
  notes,
}: GuitarLineProps): JSX.Element {
  const handleClickGuitarLine = (note: string) => {
    synth?.triggerAttackRelease(note, 0.2);
  };
  return (
    <div style={{ top: (index - 1) * 15 + "px" }} className={styles.line}>
      {notes.map((note) => {
        return (
          <div onClick={() => handleClickGuitarLine(note)} key={note}></div>
        );
      })}
    </div>
  );
}



function Guitar({ synth, setSynth }: InstrumentProps): JSX.Element {
  const guitarLines: string[][] = [
    ["C#5", "D#4", "A#8"],
    ["B6", "E2", "F7"],
    ["A#1", "F8", "B3"],
  ];

  return (
    <div className={styles.wrapper}>
      <img alt="" src={guitarImage} className={styles.guitarImg} />
      <div className={styles.lineBox}>
        {guitarLines.map((item, index) => (
          <GuitarLine synth={synth} index={index} key={index} notes={item} />
        ))}
      </div>
    </div>
  );
}

export const GuitarInstrument = new Instrument("Guitar", Guitar);
