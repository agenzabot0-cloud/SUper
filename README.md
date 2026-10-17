# SUper
The future, inside of a web app. 
use SUper on any device using the website! [SUperWEB!](https://agenzabot0-cloud.github.io/SUper/)

## Howto run it
After downloading the file run these commands.
**Bash**
```bash
adb shell pm install -r /sdcard/Download/SUper.apk
adb shell am start -n com.super.name/.MainActivity
```

**Batch**

```batch
@echo off
:: Define the local directory or file target
set FILE_PATH=%USERPROFILE%\Downloads\SUper.exe

echo 📂 Accessing local file...
if not exist "%FILE_PATH%" (
    echo ❌ File not found!
    pause
    exit /b
)

echo 🚀 Starting application...
start "" "%FILE_PATH%"

echo ✅ Done!
pause
```
