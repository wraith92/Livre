import React from 'react';
import Livres from './page/Livre';
import Ajouter from './page/Ajouter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assetes/css/style.css'
import Navbar from './component/navbar';
import InfoLivre from './page/infoLivre';
function App() {
  return (
   
     <Router>
     <div className="App">
       <Navbar/>
       <Routes>
         <Route path="/" element={<Livres />} />
         <Route path="/livres/livre/:id" element={<InfoLivre />} />
         <Route path="/Ajouter" element={<Ajouter />} />
       </Routes>
     </div>
   </Router>
  );
}

export default App;