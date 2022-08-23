
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { BuzzerComponent } from './Pages/Buzzer';
import { DiagnosticComponent } from './Pages/Diagnostic';
import { DisplayComponent } from './Pages/Display';
import { ManagementComponent } from './Pages/Management';


const App = () => {
  return (
    <Router>
      <div className="wrapper">

        <Routes>
          <Route path="/display/:key" element={ <DisplayComponent /> } />
          <Route path="/" element={ <ManagementComponent /> } />
          <Route path="/" element={ <DiagnosticComponent /> } />
          <Route path="/" element={ <BuzzerComponent /> } />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
