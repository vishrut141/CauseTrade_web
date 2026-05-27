#!/bin/bash

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
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
npm run dev
