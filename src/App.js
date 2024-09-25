import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FlashCards from './components/FlashCards';
import Java from './components/Java';
import Python from './components/Python';
import C from './components/C';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateFlashcards from './components/CreateFlashcards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/create" element={<CreateFlashcards/>} />
        <Route path="/java" element={<Java />} />
        <Route path="/python" element={<Python />} />
        <Route path="/c" element={<C />} />
      </Routes>
    </Router>
  );
}

export default App;
