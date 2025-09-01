import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    age: '',
    course: ''
  });

  // API URL
  const API_URL = 'http://127.0.0.1:8000/api';

  // Studenten von API laden
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${API_URL}/students/`);
      setStudents(response.data);
    } catch (error) {
      console.error('Fehler beim Laden der Studenten:', error);
    }
  };

  // Beim Start der App Studenten laden
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Studenten Verwaltung</h1>
        <p>Anzahl Studenten: {students.length}</p>
        
        <div>
          <h2>Alle Studenten:</h2>
          {students.map(student => (
            <div key={student.id} style={{margin: '10px', padding: '10px', border: '1px solid white'}}>
              <p><strong>{student.name}</strong></p>
              <p>Email: {student.email}</p>
              <p>Alter: {student.age}</p>
              <p>Studiengang: {student.course}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
