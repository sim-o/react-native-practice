# this repository

## setup ios build and simulator

install xcode
install simulator
xcode-select --install
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

## setup android

install android studio
within android studio, install android sdk

## install detox with

```bash
npm install detox-cli --global
brew tap wix/brew
brew install applesimutils
npx expo install detox @config-plugins/detox
```

## checkout this repository

then run `npm install`

# to reproduce project

see https://docs.expo.dev/guides/typescript/
npx create-expo-app -t expo-template-blank-typescript

## install prettier and eslint

see https://docs.expo.dev/guides/using-eslint/

## install jest

npm i -D jest jest-expo @types/jest

## install husky and lint-staged

npm install --save-dev husky lint-staged
add the lint-staged section to package.json - I've set lint staged to disable parallel as eslint --fix and prettier would clash  
run `npx husky init`
add scripts to .husky/pre-commit

## install nativewind

https://www.nativewind.dev/quick-starts/expo

## install flashlist

npm i @shopify/flash-list
remember to add the setup script to jest-setup.ts
