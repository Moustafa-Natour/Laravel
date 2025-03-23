import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This would typically fetch from Laravel API
    // For now, we'll use a mock response
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
    ];

    // Simulate API call
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 500);

    // In a real app with Laravel backend:
    // axios.get('/api/users')
    //   .then(response => {
    //     setUsers(response.data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError('Failed to fetch users');
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div className="page-content">
      <h1>Welcome to Laravel React App</h1>
      <p>This is a basic Laravel 11 application with React components.</p>

      <h2 className="mt-4">User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <div className="users-list">
          {users.map(user => (
            <div key={user.id} className="card mb-3 p-3">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;