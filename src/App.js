import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [original] = useState();
  const [solution, setSolution] = useState('');

  const translate = useCallback((text) => {
    const dictionary = {
      a: 'j',
      b: 'g',
      c: 'o',
      d: 't',
      e: 'b',
      f: 'p',
      g: 's',
      h: 'e',
      i: 'ñ',
      j: 'u',
      k: 'c',
      l: 'm',
      m: 'x',
      n: 'i',
      ñ: 'y',
      o: 'v',
      p: 'f',
      q: 'n',
      r: 'a',
      s: 'l',
      t: 'r',
      u: 'h',
      v: 'w',
      w: 'd',
      x: 'z',
      y: 'q',
      z: 'k',
    };

    return [...text].map((character) => {
      const c = character.toLowerCase();
      return dictionary[c] ? dictionary[c] : c;
    }).join('');
  }, []);

  const onContentChanged = useCallback((e) => {
    console.log(`${e.target.value} == ${translate(e.target.value)}`);
    setSolution(translate(e.target.value));
  }, [translate, setSolution]);

  return (
    <div className="App">
      <header className="App-header">
        <textarea
          value ={original}
          onChange={onContentChanged}
          autoFocus
        />
        <textarea
          value ={solution}
          onChange={(e) => {}}
          disabled
        />
      </header>
    </div>
  );
}

export default App;
