// 3rd party library imports
import * as Tone from 'tone';
import { List } from 'immutable';

// project imports
import { Instrument, InstrumentProps} from '../Instruments';
import recorder from '../img/recorder.png'

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Xylophone.
 ** ------------------------------------------------------------------------ */

interface FluteKeyProps {
  note: string;
  synth?: Tone.Synth; // Contains library code for making sound
  index: number,
  duration?: string,
}

export function FluteKey({
  note,
  synth,
  index,
  duration,
}: FluteKeyProps): JSX.Element {
  return (
    <div 
      style={{
        height: `10px`, 
        width: "15px", 
        background: `black`, 
        opacity: ".3",
        position: "absolute",
        top: `50px`,
        left: `${106+index*40+index/3}px`,
        borderRadius: "2px"
      }} 
      onClick={() => {
        synth?.triggerAttackRelease(`${note}`,"8n");
      }}
    >      
    </div>
  );
}

function Flute({synth, setSynth}: InstrumentProps): JSX.Element {
  
  const setPolySynth = () => {
    setSynth(oldSynth => {
      oldSynth.disconnect();
      const synth: Tone.Synth<Tone.SynthOptions> = new Tone.PolySynth(Tone.Synth, {
        oscillator : {
          type : "triangle"
        }
      }).toDestination() as unknown as Tone.Synth<Tone.SynthOptions>;
      synth.set({ detune: -800, portamento: 10});
      return synth;
    })
  }

  const keys = List([
    { note: "C4", index: 0},
    { note: "D4", index: 1},
    { note: "E4", index: 2},
    { note: "F4", index: 3},
    { note: "G4", index: 4},
    { note: "A4", index: 5},
    { note: "B4", index: 6},
  ]);

  return (
    <div style={{ display: "flex", textAlign: "center", width: "640px", height: "408px"}}>
      <div style={{ userSelect: "none", position: "relative" }}>
        <img src={recorder} alt="pic" draggable="false" onLoad={() => setPolySynth()}/>
        {keys.map(
          key => {
            return (
              <FluteKey
                note={key.note}
                synth={synth}
                index={key.index}
                duration={"8n"}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export const FluteInstrument = new Instrument('Flute', Flute);
