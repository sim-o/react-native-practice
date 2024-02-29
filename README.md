# This Repository

## Setup Ios Build And Simulator

- install xcode
- install simulator
- `xcode-select --install`
- `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`

## Setup Android

- install android studio
- within android studio, install android sdk

## Install Detox

```bash
npm install detox-cli --global
brew tap wix/brew
brew install applesimutils
```

see @config-plugins/detox docs https://github.com/expo/config-plugins/tree/main/packages/detox

## Run Detox

```bash
npx expo prebuild [--clean]
npm run detox:[ios/android]:build
npm run detox:[ios/android]
```

## Debugging

- see https://reactnative.dev/docs/debugging
- requires expo-dev-client
- to examine the component tree: `npx react-devtools`

to access the javascript console, press `j` in the expo terminal app

# Reproducing This Project

see https://docs.expo.dev/guides/typescript/

```bash
npx create-expo-app -t expo-template-blank-typescript
npx expo install detox @config-plugins/detox
```

## Install Prettier and Eslint

see https://docs.expo.dev/guides/using-eslint/

## Install Jest

npm i -D jest jest-expo @types/jest

## Testing Redux Components

see app/test-utils.tsx for a helper that will render redux components with prepared state.

## Install Detox

https://wix.github.io/Detox/docs/19.x/introduction/getting-started/

```bash
npm install detox-cli --global
npm install detox --save-dev
# follow the platform guides from the link above
detox init
configure the .detoxrc.js
```

## Install Husky and Lint-Staged

- npm install --save-dev husky lint-staged
- add the lint-staged section to package.json - I've set lint staged to disable parallel with `-p false`
  as `eslint --fix` and `prettier` would clash
- run `npx husky init`
- add scripts to .husky/pre-commit

## Install Nativewind

https://www.nativewind.dev/quick-starts/expo

## Install Flash-List

- npm i @shopify/flash-list
- add the setup script to jest-setup.ts

flash-list requires all external state to be passed to components via the `extraData` parameter, and will not re-render
on changes to state that is not passed through this.

## Expo-Dev-Client

if at some point you install this dependency (it does helpful things), the detox tests may stop working. There is a workaround
in starter.test.ts that opens the app within the dev app within the simulator and dismisses the developer menu.
