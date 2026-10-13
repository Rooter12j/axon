// Optional fallback used only if the browser blocks the direct PumpPortal call (CORS).
// Stateless: it forwards the request and returns an UNSIGNED transaction. No keys ever touch it.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const r = await fetch('https://pumpportal.fun/api/trade-local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const buf = Buffer.from(await r.arrayBuffer());
    res.status(r.status).setHeader('Content-Type', r.headers.get('content-type') || 'application/octet-stream').send(buf);
  } catch (e) {
    res.status(502).send('upstream error');
  }
};
