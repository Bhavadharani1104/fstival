// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../logo.PNG'; // Import the logo image
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <div>
      <div className="home-container">
        <img
          src={logo} // Use the imported logo image
          alt="Logo"
          style={{ width: '100px', height: '100px', marginRight: '15px', marginTop: '-70px' }} 
        />
        <h1 className="heading">Snippet Lab</h1>
        <p className="para">Code Create Conquer</p>
        <div>
          <Link to="/flashcards">
            <button className="btn-flashcards">Explore Flashcards</button>
          </Link>
          <Link to="/create">
            <button className="btn-flashcards">Create Flashcards</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
