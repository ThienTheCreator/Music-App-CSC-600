// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';

import { GuitarInstrument } from './instruments/haozhanli000';
import { newformVisualizer } from './visualizers/haozhanli000';

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

const instruments = List([PianoInstrument,GuitarInstrument]);
const visualizers = List([WaveformVisualizer,newformVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
