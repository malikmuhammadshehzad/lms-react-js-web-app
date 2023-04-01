
import { Box } from '@mui/material';
import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // validate form data and submit to API
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

function CourseList() {
  const courses = [
    { id: 1, name: 'React.js Fundamentals' },
    { id: 2, name: 'Advanced React.js' },
    { id: 3, name: 'React Native Development' },
  ];

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          {course.name}
          <button>Register</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  function handleRegistrationClick() {
    setShowRegistration(true);
    
  }

  return (
    <Box sx={{marginLeft:12}} >
    <div>
      {showRegistration ? <RegistrationForm /> : <CourseList />}
      <button onClick={handleRegistrationClick}>Register</button>
    </div>
    </Box>
    
  );
}

export default App;
