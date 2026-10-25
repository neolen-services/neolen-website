#!/usr/bin/env bash
# Build the static site and publish it to the nginx web root.
set -euo pipefail

cd "$(dirname "$0")/.."
WEB_ROOT=/var/www/neolen.com
PNPM="npx -y pnpm@10.28.0"

$PNPM install --frozen-lockfile
$PNPM build

# Copy into a fresh directory, then swap it in so visitors never see a half-copied site.
sudo rm -rf "$WEB_ROOT.new"
sudo cp -r out "$WEB_ROOT.new"
sudo chown -R www-data:www-data "$WEB_ROOT.new"
[ -d "$WEB_ROOT" ] && sudo mv "$WEB_ROOT" "$WEB_ROOT.old"
sudo mv "$WEB_ROOT.new" "$WEB_ROOT"
sudo rm -rf "$WEB_ROOT.old"

echo "Deployed to $WEB_ROOT"
