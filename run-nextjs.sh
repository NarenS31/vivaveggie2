#!/bin/bash
# Script to start Next.js application

cd "$(dirname "$0")"
export HOSTNAME="0.0.0.0"
export PORT="${PORT:-3000}"

echo "Starting Next.js application with turbopack..."
exec npx next dev --turbo