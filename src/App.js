import './App.css';
import React, { useState } from 'react';

function App() {

  const [age, setAge] = useState(0);
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const up = (220 - age) * 0.85
    const low = (220 - age) * 0.65
    setUpper(up.toFixed(0));
    setLower(low.toFixed(0));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Heart rate limits calculator</h3>
      <div>
        <label>Age</label>
      </div>
      <div>
        <input type="number" value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div>
        <label>Heart rate limits</label>
      </div>
      <div>
        <output>{lower} - {upper}</output>
      </div>
      <button className="btn btn-primary">Calculate</button>
    </form>
  );
}

export default App;
