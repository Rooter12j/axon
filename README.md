# AXON Web: runs in your browser tab, hosted on Vercel

No `.env`, no always-on server, no login. It runs only while the page is open on your computer.

## Deploy (about 2 minutes)

```bash
npm i -g vercel
cd axon-web
vercel --prod
```
Accept the defaults (no build command, no framework). Open the https link it prints. The page must be opened over https, otherwise the browser disables the encryption the session wallet needs.

## First-time setup

1. **Connect Phantom or Solflare.** You approve once. Next visits reconnect silently.
2. **Create a session wallet.** Choose a passphrase. The key is generated and encrypted inside your browser and never sent anywhere.
3. **Back up the key** (button in the Wallet panel), then **fund** the session wallet with a small amount. This is the only transfer your main wallet signs.
4. Run **Paper** for a day or two. Export the trades as CSV and look at the net result.
5. Switch to **Live** only after that.

Why a session wallet: a main wallet asks you to approve every transaction, which is too slow for sniping. The session wallet signs instantly, and your main wallet stays untouched. Use "Withdraw all" to send the funds back at any time.

## RPC

Paste your endpoint into the RPC field and press Test RPC.

1. Sign up for a Solana RPC provider (Helius, Alchemy, QuickNode, Chainstack and Syndica all offer starter plans).
2. Create an API key and copy the HTTPS URL.
3. If the dashboard lets you restrict the key to a domain, restrict it to your Vercel domain. The key is visible in the browser.
4. Pick the region closest to you.

The public endpoint `api.mainnet-beta.solana.com` is rate-limited and not meant for production. Free-plan limits change, so check your provider's dashboard.

## Limits to know

- Keep the tab open, visible and the computer awake. Background tabs get throttled and exits can be late. The page asks the screen to stay awake while running.
- If you close the tab while a live position is open, nothing sells it. Reopen, unlock and press "Sell all and stop".
- `api/trade.js` is an optional fallback if the browser blocks the direct PumpPortal call. It holds no keys.
- Fee fields are editable. Pump.fun's fee can be dynamic, so check the current rate.
- Browser plus public internet is slower than a dedicated server near the validators. Expect to lose races to faster bots.
