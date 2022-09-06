import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Analysis from "./components/pages/Analysis"
import Education from "./components/pages/Education"
import Reports from "./components/pages/Reports"

function App() {

  
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/analysis"  element={<Analysis/>}/>
          <Route path="/educations" element={<Education/>} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
