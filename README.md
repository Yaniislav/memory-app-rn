# Memory App

## Setup

This project was bootstrapped with [react-native init](https://facebook.github.io/react-native/docs/getting-started.html#creating-a-new-application).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://facebook.github.io/react-native/docs/getting-started.html).

Run `yarn` in the root of the project.

## Table of Contents

- [my-app](#my-app)
	- [Setup](#setup)
	- [Table of Contents](#table-of-contents)
	- [Updating to New Releases](#updating-to-new-releases)
	- [Available Scripts](#available-scripts)
		- [`yarn start`](#yarn-start)
			- [`yarn test`](#yarn-test)
			- [`react-native run-ios`](#react-native-run-ios)
			- [`react-native run-android`](#react-native-run-android)

## Updating to New Releases

You should only need to update the global installation of `react-native-cli` very rarely, ideally never.

The most recent version of this guide is available [here](https://facebook.github.io/react-native/docs/upgrading#projects-built-with-native-code)

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `react-native run-ios`
Before using this command, please run `yarn pod`.
Attempts to open your app in the iOS Simulator if you're on a Mac and have it installed. Also you can manually launch app through xCode (open `.xworkspace` file in `/ios` directory)

#### `react-native run-android`

Attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App.
Also you can manually launch app through `Android Studio`.
