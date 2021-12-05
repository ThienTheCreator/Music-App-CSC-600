// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { DrumInstrument } from './instruments/Drum';

import { WaveformVisualizer } from './visualizers/Waveform';
import { trumanWaveVisualizer } from './visualizers/trumanWave';

import { XylophoneInstrument } from './instruments/ThienTheCreator';
import { Spiral } from './visualizers/ThienTheCreator';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;


const instruments = List([PianoInstrument, DrumInstrument,XylophoneInstrument]);
const visualizers = List([WaveformVisualizer, trumanWaveVisualizer,Spiral]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers
});
