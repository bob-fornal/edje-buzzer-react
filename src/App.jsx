
import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { DisplayComponent } from './Pages/Display';
import { ManagementComponent } from './Pages/Management';

const App = () => {
  return (
    <Router>
      <div className="wrapper">

        <Routes>
          <Route path="/display/:key" element={ <DisplayComponent /> } />
          <Route path="/" element={ <ManagementComponent /> } />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
