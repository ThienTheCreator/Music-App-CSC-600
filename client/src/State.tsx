// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { RecorderInstrument } from './instruments/doomphd';

import { WaveformVisualizer } from './visualizers/Waveform';
import { trumanWaveVisualizer } from './visualizers/doomphd';

import { GuitarInstrument } from './instruments/haozhanli000';
import { newformVisualizer } from './visualizers/haozhanli000';

import { FluteInstrument } from './instruments/Ephillpott';
import { testvis } from './visualizers/Ephillpott';

import { XylophoneInstrument } from './instruments/ThienTheCreator';
import { ThienSpiral } from './visualizers/ThienTheCreator';


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


const instruments = List([ XylophoneInstrument, PianoInstrument, RecorderInstrument, GuitarInstrument, FluteInstrument]);
const visualizers = List([ ThienSpiral, WaveformVisualizer, trumanWaveVisualizer, newformVisualizer, testvis]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers
});
