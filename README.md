# Trade Journal

A password-only personal trading journal. Cloudflare Workers runs the app and checks the password on the server. Cloudflare D1 saves trades so they are available across browsers and devices. Use the Workers Free plan and the included workers.dev address.

## Publish

1. Create a Cloudflare account at https://dash.cloudflare.com/ and install Node.js 22 or newer from https://nodejs.org/. Extract this ZIP and open a terminal in the extracted trade-journal folder.
2. Sign in and create the database:

   ```sh
   npx wrangler@latest login
   npx wrangler@latest d1 create trade-journal
   ```

3. Copy the database UUID from the output into `wrangler.toml`, replacing `REPLACE_WITH_DATABASE_ID`. Keep the binding name `DB`.
4. Set up the database and deploy:

   ```sh
   npx wrangler@latest d1 migrations apply trade-journal --remote
   npx wrangler@latest deploy
   ```

   If prompted, register a free workers.dev subdomain. The deployment prints the URL. The journal stays locked until both secrets below are set.
5. Set the journal password as a secret. Enter your chosen password at the hidden prompt with the capitalization and spacing you intend to use.

   ```sh
   npx wrangler@latest secret put JOURNAL_PASSWORD
   ```

6. Generate a random session signing key, then paste the printed value at Wrangler's hidden prompt:

   ```sh
   node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
   npx wrangler@latest secret put SESSION_KEY
   ```

7. Open the workers.dev URL and unlock the journal. Cloudflare sign-in is for deployment and administration. Visitors to the journal see its password screen.

The new Cloudflare database starts empty. Records already in another deployment do not move automatically.

## Log a trade

Select Win or Loss and enter a positive R multiple. A Win with 0.5 records +0.5R, and a Loss with 1 records −1R. Enter the realized result for each trade. The date range controls both the trade list and the dashboard.

## Update

Run `npx wrangler@latest deploy` from this folder after editing the source. Keep the same Worker and database configuration to continue using your saved trades. Use `npx wrangler@latest secret put JOURNAL_PASSWORD` to change your password.
