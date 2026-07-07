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

  // Read request body as buffer
  let bodyBuffer = null;
  if (req.method === 'POST') {
    bodyBuffer = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', chunk => chunks.push(chunk));
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });
  }

  // Construct env object from Vercel process.env
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
    // Build a Web API Request compatible with the Cloudflare Worker handler
    const requestInit = {
      method: req.method,
      headers: Object.fromEntries(
        Object.entries(req.headers).map(([k, v]) => [k, Array.isArray(v) ? v.join(', ') : v])
      ),
    };

    if (bodyBuffer && bodyBuffer.length > 0) {
      requestInit.body = bodyBuffer;
    }

    const workerRequest = new Request(fullUrl, requestInit);
    const response = await worker.fetch(workerRequest, env);

    // Copy status and headers
    res.status(response.status);
    response.headers.forEach((v, k) => res.setHeader(k, v));

    const responseBody = await response.arrayBuffer();
    res.end(Buffer.from(responseBody));
  } catch (err) {
    console.error('Vercel Handler Error:', err);
    res.status(500).send(err.message);
  }
}
