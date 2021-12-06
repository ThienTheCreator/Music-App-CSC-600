// 3rd party library imports
import * as Tone from 'tone';
import { List } from 'immutable';

// project imports
import { Instrument, InstrumentProps} from '../Instruments';
import pic from '../img/xylophone.png'
import { useCallback, useEffect, useState } from 'react';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Xylophone.
 ** ------------------------------------------------------------------------ */

interface XylophoneKeyProps {
  note: string;
  synth?: Tone.Synth; // Contains library code for making sound
  index: number,
  height: number,
  top: number,
  color: string,
}

export function XylophoneKey({
  note,
  synth,
  index,
  top,
  height,
  color,
}: XylophoneKeyProps): JSX.Element {
  
  const [opacity, setOpacity] = useState(".3");

  return (
    <div 
      style={{
        height: `${height}px`, 
        width: "58px", 
        background: `${color}`, 
        opacity: `${opacity}`,
        position: "absolute",
        top: `${top}px`,
        left: `${17+index*78+index/3}px`,
        borderRadius: "18px"
      }} 
      onClick={() => {
        synth?.triggerAttackRelease(`${note}`,"8n");
      }}
      onMouseEnter={() => setOpacity(".5")}
      onMouseLeave={() => setOpacity(".3")}
    >      
    </div>
  );
}

function Xylophone({synth, setSynth}: InstrumentProps): JSX.Element {
  
  const setMonoSynth = () => {
    setSynth(oldSynth => {
    oldSynth.disconnect();
    
    const synth: Tone.Synth<Tone.SynthOptions> = new Tone.MonoSynth({
      oscillator: {
        type: "square8"
        },
      envelope: {
        attack: 0.01,
        decay: 1.6,
        sustain: 0,
        release: 1,
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.7,
        sustain: 0.1,
        release: 0.8,
        baseFrequency: 300,
        octaves: 2
      }
    }).toDestination() as unknown as Tone.Synth<Tone.SynthOptions>;
    return synth;
    })
  }

  const keys = List([
    { note: "C5", index: 0, top: 11, height: 388, color: "red"},
    { note: "D5", index: 1, top: 44, height: 356, color: "orange"},
    { note: "E5", index: 2, top: 76, height: 324, color: "yellow"},
    { note: "F5", index: 3, top: 98, height: 304, color: "green"},
    { note: "G5", index: 4, top: 129, height: 272, color: "cyan"},
    { note: "A5", index: 5, top: 150, height: 252, color: "blue"},
    { note: "B5", index: 6, top: 172, height: 230, color: "purple"},
    { note: "C6", index: 7, top: 192, height: 210, color: "pink"},
  ]);
  // Press QWERTYUI to play a note
  const keypressFunction = useCallback((event) => {
    switch(event.keyCode){
      case 49:
        synth?.triggerAttackRelease("C5","8n");
        break;
      case 50:
        synth?.triggerAttackRelease("D5","8n");
        break;
      case 51:
        synth?.triggerAttackRelease("E5","8n");
        break; 
      case 52:
        synth?.triggerAttackRelease("F5","8n");
        break;
      case 53:
        synth?.triggerAttackRelease("G5","8n");
        break;
      case 54:
        synth?.triggerAttackRelease("A5","8n");
        break;
      case 55:
        synth?.triggerAttackRelease("B5","8n");
        break;
      case 56:
        synth?.triggerAttackRelease("C6","8n");
        break;
      default:
      break;
    }
  }, [synth]);

  useEffect(() => {
    document.addEventListener("keydown", keypressFunction, false);

    return () => {
      document.removeEventListener("keydown", keypressFunction, false);
    };
  });

  return (
    <div style={{ display: "flex", textAlign: "center", width: "640px", height: "408px"}}>
      <div style={{ userSelect: "none", position: "relative" }}>
        <img src={pic} alt="pic" draggable="false" onLoad={() => setMonoSynth()}/>
        {keys.map(
          key => {
            return (
              <XylophoneKey
                note={key.note}
                synth={synth}
                index={key.index}
                height={key.height}
                top={key.top}
                color={key.color}
              />
            );
          })
        }
        <input type="hidden"/>
      </div>
    </div>
  );
}

export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);