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

:: Define the location of the APK on the phone's storage
set PHONE_APK_PATH=/sdcard/Download/SUper.apk

:: Define your app's package and main activity strings
set PACKAGE_NAME=com.SUper.app
set MAIN_ACTIVITY=.MainActivity

echo 📂 Accessing device storage...
:: 1. Direct the Android Package Manager to install the APK from storage
adb shell pm install -r "%PHONE_APK_PATH%"

echo 🚀 Starting application...
:: 2. Instantly launch the app UI
adb shell am start -n %PACKAGE_NAME%/%MAIN_ACTIVITY%

echo ✅ Done!
pause
```
