#!/bin/bash

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
URL="http://localhost:3000"
cd "$PROJECT_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is not installed or not available in PATH."
  echo "Install Node.js and npm, then try again."
  read -r -p "Press Enter to close..."
  exit 1
fi

echo "Starting CauseTrade dev server in $PROJECT_DIR"
# Clear generated Next.js output so the launcher does not reuse stale chunks.
rm -rf "$PROJECT_DIR/.next"
(
  for _ in $(seq 1 90); do
    if curl -fsS "$URL" >/dev/null 2>&1; then
      open "$URL"
      exit 0
    fi
    sleep 1
  done
  osascript -e 'display alert "CauseTrade server did not start" message "The dev server did not become reachable on http://localhost:3000 within 90 seconds."'
) >/dev/null 2>&1 &
npm run dev
