#!/usr/bin/env bash
set -euo pipefail

# Local helper to test docker compose deploy (for manual SSH use)

sudo apt-get update -y
sudo apt-get install -y docker-compose
cd /home/ubuntu/app
sudo docker compose up -d --build
sudo docker ps -a
