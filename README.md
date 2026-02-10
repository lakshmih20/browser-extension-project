# Flow Tracker Browser Extension

A Chrome MV3 side panel extension plus a React app that simulates a user journey across three pages: Instagram feed, Flipkart product, and Payment. The extension tracks the current step and highlights it in the side panel UI.

## What this includes

- Vite + React demo app with routes at `/instagram`, `/flipkart`, and `/payment`.
- Chrome extension (Manifest V3) with a side panel UI and a content script.
- Step tracking stored in `chrome.storage` and reflected in the side panel.

## How it works

1. The React app runs on `http://localhost:5173`.
2. The content script watches the route and sets `currentStep` in `chrome.storage`.
3. The side panel reads `currentStep` and highlights the active step.

## Run the demo app

```bash
npm install
npm run dev
```

Open `http://localhost:5173/instagram` in Chrome.

## Load the extension

1. Go to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `public/` folder (it contains `manifest.json`).
4. Click the extension icon to open the side panel.

## Try the flow

Navigate between these routes and watch the side panel update:

- `/instagram`
- `/flipkart`
- `/payment`

## Tech stack

- React + Vite
- Chrome Extensions (Manifest V3)

