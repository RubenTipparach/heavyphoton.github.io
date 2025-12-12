@echo off
echo Building Heavy Photon site...
cd /d "%~dp0work"
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b %errorlevel%
)
echo.
echo Build deployed to docs/ folder successfully!
pause
