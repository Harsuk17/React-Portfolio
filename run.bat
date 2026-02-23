@echo off
:menu
cls
echo ==========================================
echo       Portfolio Project Manager
echo ==========================================
echo 1. Start Development Server (npm run dev)
echo 2. Build Project (npm run build)
echo 3. Preview Production Build (npm run preview)
echo 4. Install Dependencies (npm install)
echo 5. Lint Code (npm run lint)
echo 6. Exit
echo ==========================================
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto preview
if "%choice%"=="4" goto install
if "%choice%"=="5" goto lint
if "%choice%"=="6" goto exit
echo Invalid choice, please try again.
pause
goto menu

:dev
echo Starting development server...
npm run dev
pause
goto menu

:build
echo Building project...
npm run build
pause
goto menu

:preview
echo Previewing production build...
npm run preview
pause
goto menu

:install
echo Installing dependencies...
npm install
pause
goto menu

:lint
echo Running lint...
npm run lint
pause
goto menu

:exit
echo Exiting...
exit
