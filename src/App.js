import React from 'react';
import Example from './Example';
import { CounterDemo } from './Hooks';
import { EffectDemo } from './EffectDemo';
import { CountryList } from './CountryList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Example />
      <CounterDemo />
      <EffectDemo />
      <CountryList />
    </div>
  );
}

export default App;
