@echo off
REM ============================================================
REM  rise8companies.com revamp - one-click launcher
REM  Syncs this folder with the repo, then starts Claude Code.
REM ============================================================

REM Move to the folder this script lives in (works from anywhere)
cd /d "%~dp0"

echo [1/2] Syncing with origin/main...
git pull origin main

echo [2/2] Launching Claude Code...
claude

REM Keep the window open if Claude Code exits
pause
