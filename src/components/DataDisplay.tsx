// src/components/DataDisplay.tsx
import React from 'react';
import { useQuery } from '../utils/database';
import { useEffect } from 'react';

// Define an interface for your data structure
interface User {
  id: number;
  name: string;
  email: string;
  // Add other fields that match your database table
}

function DataDisplay() {
  // Replace 'users' with your actual table name
  const { data, loading, error } = useQuery<User>('SELECT * FROM "rxresu"."users" LIMIT 10');

  useEffect(() => {
    if (data) {
      console.log('Fetched data:', data);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h1>Database Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;
// Removed the local useEffect function to avoid conflict with the imported one

