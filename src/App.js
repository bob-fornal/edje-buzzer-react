
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Display } from './Pages/Display/Display.js';
import { Management } from './Pages/Management/Management.js';

function App() {
  return (
    <Router>
      <div className="wrapper">

        <Routes>
          <Route path="/display/:key" element={ <Display /> } />
          <Route path="/" element={ <Management /> } />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
