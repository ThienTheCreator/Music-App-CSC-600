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
   const recorderLines: string[][] = [
     ["C#5", "D#4", "A#9","B6", "E2", "E2","C#5", "D#4", "A#9","B6", "E2", "E2","E2"],
     
   ];
 
   return (
     <div className={styles.wrapper}>
       <img alt="" src={recorder} className={styles.recorderImg} />
       <div className={styles.lineBox}>
         {recorderLines.map((item, index) => (
           <RecorderNote synth={synth} index={index} key={index} notes={item} />
         ))}
       </div>
     </div>
   );
 }
 
 export const RecorderInstrument = new Instrument("Recorder", Recorder);