import { useState } from 'react';
import { useGetAllUsersQuery } from './services/user.service';

import './App.css';

function App() {
  const { data: users, error, isLoading } = useGetAllUsersQuery();

  return (
    <div className="App">
      {error ? (
        <>There was some error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : users ? (
        users.map((user) => (
          <>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <p>{user.email}</p>
          </>
        ))
      ) : null}
    </div>
  );
}

export default App;
