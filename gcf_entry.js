import worker from './src/index.js';

// Entry point for Google Cloud Functions (HTTP trigger)
export const arrivalLabBot = async (req, res) => {
  // CORS Headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  // Construct a Request object compatible with our worker fetch handler
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['host'];
  const fullUrl = `${protocol}://${host}${req.url}`;

  // Read request body
  let body = null;
  if (req.method === 'POST') {
    body = JSON.stringify(req.body);
  }

  // Mock env object from system environment variables
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

    // Call our existing Cloudflare Worker handler logic!
    const response = await worker.fetch(workerRequest, env);
    
    // Copy headers and status to GCF response
    res.status(response.status);
    response.headers.forEach((v, k) => res.set(k, v));
    res.send(await response.text());
  } catch (err) {
    console.error("GCF Handler Error:", err);
    res.status(500).send(err.message);
  }
};
