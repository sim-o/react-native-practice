# this repository

## setup ios build and simulator

- install xcode
- install simulator
- xcode-select --install
- sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

## setup android

- install android studio
- within android studio, install android sdk

## install detox with

```bash
npm install detox-cli --global
brew tap wix/brew
brew install applesimutils
```

see @config-plugins/detox docs https://github.com/expo/config-plugins/tree/main/packages/detox

## checkout this repository

then run `npm install`

## run detox

```bash
npx expo prebuild [--clean]
npm run detox:[ios/android]:build
npm run detox:[ios/android]
```

## debugging

see https://reactnative.dev/docs/debugging

requires expo-dev-client

to examine the component tree:

```bash
npx react-devtools
```

to access the javascript console, press `j` in the expo terminal app

---

# to reproduce project

see https://docs.expo.dev/guides/typescript/

```bash
npx create-expo-app -t expo-template-blank-typescript
npx expo install detox @config-plugins/detox
```

## install prettier and eslint

see https://docs.expo.dev/guides/using-eslint/

## install jest

npm i -D jest jest-expo @types/jest

## add helper functions for testing redux components

see app/test-utils.tsx

## install detox

https://wix.github.io/Detox/docs/19.x/introduction/getting-started/

```bash
npm install detox-cli --global
npm install detox --save-dev
# follow the platform guides from the link above
detox init
configure the .detoxrc.js
```

## install husky and lint-staged

- npm install --save-dev husky lint-staged
- add the lint-staged section to package.json - I've set lint staged to disable parallel as eslint --fix and prettier would clash
- run `npx husky init`
- add scripts to .husky/pre-commit

## install nativewind

https://www.nativewind.dev/quick-starts/expo

## install flash-list

- npm i @shopify/flash-list
- remember to add the setup script to jest-setup.ts

## expo-dev-client

if at some point you install this dependency (it does helpful things), the detox tests may stop working. There is a workaround
in starter.test.ts that opens the app within the dev app within the simulator and dismisses the developer menu.
