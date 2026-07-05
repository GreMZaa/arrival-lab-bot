import worker from '../src/index.js';

// Vercel Serverless Function handler
export default async function handler(req, res) {
  // Set CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['host'];
  const fullUrl = `${protocol}://${host}${req.url}`;

  // Read request body
  let body = null;
  if (req.method === 'POST') {
    body = JSON.stringify(req.body);
  }

  // Construct Mock env object from Vercel process.env
  const env = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    ADMIN_CHAT_ID: process.env.ADMIN_CHAT_ID,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    GOOGLE_SHEETS_SPREADSHEET_ID: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_JSON: process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
  };

  try {
    const workerRequest = new Request(fullUrl, {
      method: req.method,
      headers: req.headers,
      body: body
    });

    const response = await worker.fetch(workerRequest, env);
    
    // Copy status and headers
    res.status(response.status);
    response.headers.forEach((v, k) => res.setHeader(k, v));
    res.send(await response.text());
  } catch (err) {
    console.error("Vercel Handler Error:", err);
    res.status(500).send(err.message);
  }
}
