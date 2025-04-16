// src/utils/database.ts

import { Pool, QueryResult } from 'pg';
import { useState, useEffect } from 'react';

// Use environment variables for database connection
// Create a .env file in your project root with these values
const pool = new Pool({
  connectionString: import.meta.env.VITE_DATABASE_URL,
});

// Generic type for database queries
export async function query<T>(text: string, params: unknown[] = []): Promise<QueryResult<T>> {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
}

// Example hook for fetching data
export function useQuery<T>(sqlQuery: string, params: unknown[] = []) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await query<T>(sqlQuery, params);
        setData(result.rows);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sqlQuery, params]);

  return { data, loading, error };
}

// Example function to fetch a specific table
export async function fetchTable<T>(tableName: string, schema = 'rxresu'): Promise<T[]> {
  const result = await query<T>(`SELECT * FROM "${schema}"."${tableName}"`);
  return result.rows;
}
