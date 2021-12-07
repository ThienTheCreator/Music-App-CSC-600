// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import recorder from '../img/pan.jpg'
import React from 'react';
//import styles from "../guitar-style.module.css";
import styles from "../css/recorder.module.css"

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

 interface RecorderLineProps {
   notes: string[];
   index: number;
   duration?: string;
   synth?: Tone.Synth;
 }
 
 export function RecorderNote({
   index,
   synth,
   notes,
 }: RecorderLineProps): JSX.Element {
   const handleClickRecorderNote = (note: string) => {
     synth?.triggerAttackRelease(note, 0.25);
   };
   return (
     <div style={{ top: (index - 1) * 15 + "px" }} className={styles.line}>
       {notes.map((note) => {
         return (
           <div onClick={() => handleClickRecorderNote(note)} key={note}></div>
         );
       })}
     </div>
   );
 }

 
 
 function Recorder({ synth, setSynth }: InstrumentProps): JSX.Element {

  const setMonoSynth = () => {
    setSynth(oldSynth => {
      oldSynth.disconnect();
      const synth: Tone.Synth<Tone.SynthOptions> = new Tone.MonoSynth({
        oscillator: {
          type: "square"
        },
        envelope: {
          attack: 0.1
        }
      }).toDestination() as unknown as Tone.Synth<Tone.SynthOptions>;
      synth.set({ detune: -800, portamento: 10});
      return synth;
    })
  }
   const recorderLines: string[][] = [
     ["C3", "D3", "E3","F3", "G3", "A4","B4", "C4", "D4","E4", "F4", "A5","B5"],
     
   ];
 
   return (
     <div className={styles.wrapper}>
       <img alt="" src={recorder} draggable="false" onLoad={() => setMonoSynth()} />
       <div className={styles.lineBox}>
         {recorderLines.map((item, index) => (
           <RecorderNote synth={synth} index={index} key={index} notes={item} />
         ))}
       </div>
     </div>
   );
 }
 
 export const RecorderInstrument = new Instrument("Panflute", Recorder);