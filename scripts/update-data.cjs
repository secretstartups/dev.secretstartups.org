// scripts/update-data.js
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Use DATABASE_URL from environment variable set in GitHub Actions
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

console.log('Database URL:', process.env.DATABASE_URL);

async function fetchData() {
  try {
    // Connect to database
    const client = await pool.connect();
    console.log('Connected to database');
    
    // Query your database for random entries
    // Replace "your_table" with your actual table name
    const result = await client.query(`
      SELECT * FROM "rxresu"."user"
      ORDER BY RANDOM()
      LIMIT 10
    `);
    
    console.log(`Retrieved ${result.rows.length} rows from database`);
    
    // Ensure directory exists
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write to JSON file
    fs.writeFileSync(
      path.join(publicDir, 'data.json'), 
      JSON.stringify(result.rows, null, 2),
      'utf-8'
    );
    
    console.log(`Data successfully written to public/data.json`);
    client.release();
  } catch (err) {
    console.error('Error updating data:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

fetchData();
