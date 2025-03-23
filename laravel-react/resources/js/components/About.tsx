import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page-content">
      <h1>About This App</h1>
      <p>This is a basic Laravel 11 project with React frontend components.</p>
      <p>The application demonstrates how to:</p>
      <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
        <li>Set up Laravel 11 with React</li>
        <li>Create React components in a Laravel application</li>
        <li>Use React Router for navigation</li>
        <li>Structure a Laravel/React project</li>
        <li>Mock API calls (with prepared code for real Laravel API integration)</li>
      </ul>
      <p>In a real application, the React frontend would communicate with Laravel backend APIs to fetch and store data.</p>
    </div>
  );
};

export default About;