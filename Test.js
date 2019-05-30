debug and release modes
NOTE: all the notes below are true for both iOS and Android.

NOTE: APKs and TestFlight builds are always built in release mode.

mode is a build configuration in Xcode parlance.

in debug mode:

__DEV__ variable is set to true
Developer Menu is available - shake real device to access it (or press Menu button on Android devices if it’s available)
hot reloading works as a rule (use live reload if it doesn’t)
you can debug JS remotely - select Debug JS Remotely in Developer Menu to open React Native Debugger
in release mode:

__DEV__ variable is set to false
Developer Menu is not available
hot reloading and live reload don’t work
you cannot debug JS remotely
all possible combinations of environment and mode are:

development + debug
production + debug
production + release
the value of __DEV__ variable is determined by current mode (debug or release) - not by current environment.

iOS
it’s not necessary to uninstall existing application from device like for Android (and it doesn’t matter how existing application was installed - via App Store, TestFlight or whatever) - it will be replaced with a build run from Xcode
make sure notebook and real device use the same Wi-Fi network
open <project_name>.xcworkspace
select real device as the build target in Xcode toolbar
connect to development server

change server address for development environment: development server is now available by notebook’s local IP address - not localhost.

app/api/ApiHelpers.js:

  const LOCALHOST = Platform.OS === 'ios'
-   ? 'http://localhost:3000'
+   ? 'http://192.168.0.36:3000'
    : 'http://10.0.2.2:3000';
app/api/graphql/run.js:

  const DEVELOPMENT_BASE_URL = Platform.OS === 'ios'
-   ? 'http://localhost:3000'
+   ? 'http://192.168.0.36:3000'
    : 'http://10.0.2.2:3000';
build and run application

Xcode: ▶ (toolbar button)
Android
uninstall application from device if it’s already installed from Google Play

or else you’ll get INSTALL_FAILED_DUPLICATE_PERMISSION error:

$ react-native run-android
...
Installing APK 'app-debug.apk' on 'GT-I9500 - 5.0.1' for app:debug
04:27:39 E/SplitApkInstaller: Failed to finalize session : INSTALL_FAILED_DUPLICATE_PERMISSION:
  Package com.iceperkapp attempting to redeclare permission com.iceperkapp.permission.C2D_MESSAGE already owned by com.iceperkapp
enable USB debugging and plug in real device via USB
make sure real device is listed in adb devices output

$ adb devices
List of devices attached
emulator-5554 device
4d00af1d6fa7306d device
connect to development server

https://stackoverflow.com/a/43277765/3632318
forward port (Android 5.0+ only):

$ adb reverse tcp:3000 tcp:3000
now local 3000 port is mapped to mobile’s 3000 port.

3000 is the port development server is listening on (accordingly it’s specified as development server port in both app/api/ApiHelpers.js and app/api/graphql/run.js).

it’s not required to forward 8081 port which is used to communicate with packager - this is done automatically when you run application:

$ react-native run-android
...
Running /usr/local/share/android-sdk/platform-tools/adb -s 4d00af1d6fa7306d reverse tcp:8081 tcp:8081
also change server address for development environment: development server is now available by both localhost and notebook’s local IP address (but not 10.0.2.2 or 10.0.3.2 - like in case of emulator).

app/api/ApiHelpers.js:

  const LOCALHOST = Platform.OS === 'ios'
    ? 'http://localhost:3000'
-   : 'http://10.0.2.2:3000';
+   : 'http://localhost:3000';
app/api/graphql/run.js:

  const DEVELOPMENT_BASE_URL = Platform.OS === 'ios'
    ? 'http://localhost:3000'
-   : 'http://10.0.2.2:3000';
+   : 'http://localhost:3000';
build and run application

running react-native run-android will install application on all devices listed in adb devices output - say, both real device and emulator (it’s safe to close emulator).debug and release modes
NOTE: all the notes below are true for both iOS and Android.

NOTE: APKs and TestFlight builds are always built in release mode.

mode is a build configuration in Xcode parlance.

in debug mode:

__DEV__ variable is set to true
Developer Menu is available - shake real device to access it (or press Menu button on Android devices if it’s available)
hot reloading works as a rule (use live reload if it doesn’t)
you can debug JS remotely - select Debug JS Remotely in Developer Menu to open React Native Debugger
in release mode:

__DEV__ variable is set to false
Developer Menu is not available
hot reloading and live reload don’t work
you cannot debug JS remotely
all possible combinations of environment and mode are:

development + debug
production + debug
production + release
the value of __DEV__ variable is determined by current mode (debug or release) - not by current environment.

iOS
it’s not necessary to uninstall existing application from device like for Android (and it doesn’t matter how existing application was installed - via App Store, TestFlight or whatever) - it will be replaced with a build run from Xcode
make sure notebook and real device use the same Wi-Fi network
open <project_name>.xcworkspace
select real device as the build target in Xcode toolbar
connect to development server

change server address for development environment: development server is now available by notebook’s local IP address - not localhost.

app/api/ApiHelpers.js:

  const LOCALHOST = Platform.OS === 'ios'
-   ? 'http://localhost:3000'
+   ? 'http://192.168.0.36:3000'
    : 'http://10.0.2.2:3000';
app/api/graphql/run.js:

  const DEVELOPMENT_BASE_URL = Platform.OS === 'ios'
-   ? 'http://localhost:3000'
+   ? 'http://192.168.0.36:3000'
    : 'http://10.0.2.2:3000';
build and run application

Xcode: ▶ (toolbar button)
Android
uninstall application from device if it’s already installed from Google Play

or else you’ll get INSTALL_FAILED_DUPLICATE_PERMISSION error:

$ react-native run-android
...
Installing APK 'app-debug.apk' on 'GT-I9500 - 5.0.1' for app:debug
04:27:39 E/SplitApkInstaller: Failed to finalize session : INSTALL_FAILED_DUPLICATE_PERMISSION:
  Package com.iceperkapp attempting to redeclare permission com.iceperkapp.permission.C2D_MESSAGE already owned by com.iceperkapp
enable USB debugging and plug in real device via USB
make sure real device is listed in adb devices output

$ adb devices
List of devices attached
emulator-5554 device
4d00af1d6fa7306d device
connect to development server

https://stackoverflow.com/a/43277765/3632318
forward port (Android 5.0+ only):

$ adb reverse tcp:3000 tcp:3000
now local 3000 port is mapped to mobile’s 3000 port.

3000 is the port development server is listening on (accordingly it’s specified as development server port in both app/api/ApiHelpers.js and app/api/graphql/run.js).

it’s not required to forward 8081 port which is used to communicate with packager - this is done automatically when you run application:

$ react-native run-android
...
Running /usr/local/share/android-sdk/platform-tools/adb -s 4d00af1d6fa7306d reverse tcp:8081 tcp:8081
also change server address for development environment: development server is now available by both localhost and notebook’s local IP address (but not 10.0.2.2 or 10.0.3.2 - like in case of emulator).

app/api/ApiHelpers.js:

  const LOCALHOST = Platform.OS === 'ios'
    ? 'http://localhost:3000'
-   : 'http://10.0.2.2:3000';
+   : 'http://localhost:3000';
app/api/graphql/run.js:

  const DEVELOPMENT_BASE_URL = Platform.OS === 'ios'
    ? 'http://localhost:3000'
-   : 'http://10.0.2.2:3000';
+   : 'http://localhost:3000';
build and run application

running react-native run-android will install application on all devices listed in adb devices output - say, both real device and emulator (it’s safe to close emulator).