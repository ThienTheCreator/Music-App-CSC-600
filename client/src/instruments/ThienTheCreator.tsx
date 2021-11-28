// 3rd party library imports
import * as Tone from 'tone';
import { List } from 'immutable';

// project imports
import { Instrument, InstrumentProps} from '../Instruments';
import pic from '../img/xylophone.png'

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Xylophone.
 ** ------------------------------------------------------------------------ */

interface XylophoneKeyProps {
  note: string;
  synth?: Tone.MonoSynth; // Contains library code for making sound
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
  return (
    <div 
      style={{
        height: `${height}px`, 
        width: "58px", 
        background: `${color}`, 
        opacity: ".3",
        position: "absolute",
        top: `${top}px`,
        left: `${17+index*78+index/3}px`,
        borderRadius: "18px"
      }} 
      onClick={() => {
        synth?.triggerAttackRelease(`${note}`,"8n");
      }}
    >      
    </div>
  );
}

function Xylophone({synth}: InstrumentProps): JSX.Element {
  var setSynth = (oldSynth: Tone.Synth<Tone.SynthOptions>) => {
    oldSynth.disconnect();

    return new Tone.MonoSynth({
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
    }).toDestination();
  };
  
  var newSynth = setSynth(synth);

  const keys = List([
    { note: "C4", index: 0, top: 11, height: 388, color: "red"},
    { note: "D4", index: 1, top: 44, height: 356, color: "orange"},
    { note: "E4", index: 2, top: 76, height: 324, color: "yellow"},
    { note: "F4", index: 3, top: 98, height: 304, color: "green"},
    { note: "G4", index: 4, top: 129, height: 272, color: "cyan"},
    { note: "A4", index: 5, top: 150, height: 252, color: "blue"},
    { note: "B4", index: 6, top: 172, height: 230, color: "purple"},
    { note: "C5", index: 7, top: 192, height: 210, color: "pink"},
  ]);

  return (
    <div style={{ display: "flex", textAlign: "center", width: "640px", height: "408px"}}>
      <div style={{ userSelect: "none", position: "relative" }}>
        <img src={pic} alt="pic" draggable="false" />
        {keys.map(
          key => {
            return (
              <XylophoneKey
                note={key.note}
                synth={newSynth}
                index={key.index}
                height={key.height}
                top={key.top}
                color={key.color}
              />
            );
          })
        }
      </div>
      <div>
      </div>
    </div>
  );
}

export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);
