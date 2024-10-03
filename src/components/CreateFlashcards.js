import React, { useState } from 'react';
import './CreateFlashcards.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [expandedFlashcard, setExpandedFlashcard] = useState(null);

  const addFlashcard = () => {
    const newFlashcard = { id: Date.now(), title: '', body: '', created: new Date() };
    setFlashcards([...flashcards, newFlashcard]);
    setCurrentFlashcard(newFlashcard);
    setIsEditing(true);
  };

  const updateFlashcard = (key, value) => {
    setCurrentFlashcard({ ...currentFlashcard, [key]: value });
  };

  const saveFlashcard = () => {
    setFlashcards(flashcards.map(f => f.id === currentFlashcard.id ? currentFlashcard : f));
    setIsEditing(false);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(f => f.id !== id));
    if (currentFlashcard && currentFlashcard.id === id) {
      setCurrentFlashcard(null);
      setIsEditing(false);
    }
  };

  const toggleEdit = (flashcard) => {
    if (currentFlashcard && currentFlashcard.id === flashcard.id) {
      setIsEditing(!isEditing);
    } else {
      setCurrentFlashcard(flashcard);
      setIsEditing(true);
    }
  };

  const toggleExpand = (id) => {
    setExpandedFlashcard(expandedFlashcard === id ? null : id);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-success" onClick={addFlashcard}>Add New Flashcard</button>
      </div>
      <div></div>
      <div className="row">
        {flashcards.map(flashcard => (
          <div key={flashcard.id} className="col-md-3 mb-4">
            <div className={`card flashcard ${expandedFlashcard === flashcard.id ? 'expanded' : ''}`} onClick={() => toggleExpand(flashcard.id)}>
              <div className="card-body">
                <h5 className="card-title">{flashcard.title || 'Untitled'}</h5>
                <p className="card-text">
                  Created on: {flashcard.created.toLocaleString()}
                </p>

                {expandedFlashcard === flashcard.id && (
                  <p className="card-text">{flashcard.body || 'No content yet.'}</p>
                )}

                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary btn-sm" onClick={() => toggleEdit(flashcard)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={(e) => { e.stopPropagation(); deleteFlashcard(flashcard.id); }}>Delete</button>
                </div>

                {isEditing && currentFlashcard.id === flashcard.id && (
                  <div>
                    <input 
                      type="text"
                      placeholder="Enter title"
                      value={currentFlashcard.title}
                      onChange={(e) => updateFlashcard('title', e.target.value)}
                      className="form-control mt-2"
                    />
                    <textarea 
                      placeholder="Enter your notes here"
                      value={currentFlashcard.body}
                      onChange={(e) => updateFlashcard('body', e.target.value)}
                      className="form-control mt-2"
                    />
                    <button className="btn btn-success btn-sm mt-2" onClick={saveFlashcard}>Done</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateFlashcards;