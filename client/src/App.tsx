// 3rd party library imports
import { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// project imports
import { MainPage } from './MainPage';
import { DispatchAction, appReducer } from './Reducer';
import { defaultState } from './State';

// css imports
import 'animate.css';

/** ------------------------------------------------------------------------ **
 * App component
 ** ------------------------------------------------------------------------ */

function App() {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  useEffect(() => {
    const songs = [
      {
        "id": 1,
        "songTitle": "Ode to Joy (Dubstep Remix)",
        "notes": "E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4",
        "album": "\r\n\tSymphony 9",
        "artist": "Ludwig van Beethoven"
      },
      {
        "id": 2,
        "songTitle": "Sonata No.11",
        "notes": "G4 G4 G4 B4 E3 E5 E5 E5 D3 C3 B4 B4 B4 F#4 F#4 F#4 E4",
        "album": "Piano sonata",
        "artist": "Wolfgang Amadeus Mozart"
      },
      {
        "id": 3,
        "songTitle": "Perfect",
        "notes": "G3 D4 E4 G4 G3 G4 G3 G3 G3 A4 G4 E3 E3 G4 B4",
        "album": "÷ (\"Divide\")",
        "artist": "Ed Sheeran"
      },
      {
        "id": 4,
        "songTitle": "Canon In D",
        "notes": "D3 A2 B2 F#2 G2 D2 G2 A2 D3 F#5 A2 E5 B2 D5",
        "album": "Canon and Gigue for 3 violins and basso continuo",
        "artist": "Johann Pachelbel"
      },
      {
        "id": 5,
        "songTitle": "My Heart Will Go On",
        "notes": "F4 G4 G4 D3 A4 G4 F4 G4 C3 C5 A4 F4 D4",
        "album": "Let's Talk About Love",
        "artist": "Celine Dion"
      },
      {
        "id": 6,
        "songTitle": "Twinkle Twinkle Little Star",
        "notes": "C5 C5 G5 G5 A5 A5 G5 F5 F5 E5 E5 D5 D5 C5",
        "album": "Rhymes for the Nursery",
        "artist": "Jane Taylor"
      }
    ]
    dispatch(new DispatchAction('SET_SONGS', { songs }));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainPage state={state} dispatch={dispatch} />
        </Route>
        <Route path="/:instrument">
          <MainPage state={state} dispatch={dispatch} />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
