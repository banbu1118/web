import { Client } from 'pg';
const client = new Client({
  user: 'postgres.biflkkllrlqaglodysjl',
  password: 'absolute1',
  host: 'aws-1-ap-southeast-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
});
await client.connect();

const res = await client.query('SELECT $1::text as message', ['Hello world!']);
console.log(res.rows[0].message); // Hello world!
await client.end();