# Shattered Skies - Book Launch Website

## Project info

This is the official book launch website for "Shattered Skies" by Aarav Sen.

## How can I edit this code?

### Use your preferred IDE

Clone this repo and make changes locally.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Port conflict notice

If you visit the dev server (default `http://localhost:5173`) and see a different web service (for example, a database admin UI such as EDB/Postgres), another process is listening on the web port.

Options:

- Stop the conflicting service (for example, stop the EDB Postgres admin service or Docker container).
 	- On Windows:
  		- Check what's listening: `netstat -aon | findstr :8080`
  		- Get the process name: `tasklist /FI "PID eq <PID>"`
  		- Kill the process: `taskkill /PID <PID> /F`
 	- If it's a Docker container: `docker ps` and `docker stop <container_id>`
- Or change the Vite dev port to 5173 (default) or other port if you prefer.
 	- Start the dev server on a different port temporarily via CLI: `npm run dev -- --port 5173`
 	- Or permanently change the port in `vite.config.ts` or `package.json` script - this project defaults to port 5173 now.

If you've changed ports, open `http://localhost:<port>` in your browser to access the app.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project to various platforms like Vercel, Netlify, or GitHub Pages.
