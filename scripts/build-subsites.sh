#!/usr/bin/env bash
# Builds each sub-site and copies it into dist/<name>/. Run after `astro build`
# (which empties dist/).
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
work="$root/.subsites"

# ponkotsu: Preact/Vite preview + spec app, served at /ponkotsu/
repo="${PONKOTSU_REPO:-https://github.com/Minnowo/ponkotsu-css}"
dir="$work/ponkotsu-css"
if [ -d "$dir/.git" ]; then
    git -C "$dir" pull --ff-only
else
    git clone --depth 1 "$repo" "$dir"
fi
(cd "$dir" && npm ci && npm run app:install && npm run build --prefix app -- --base=/ponkotsu/ --outDir "$root/dist/ponkotsu" --emptyOutDir)
