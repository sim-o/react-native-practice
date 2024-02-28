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
```

## checkout this repository

then run `npm install`

# to reproduce project

see https://docs.expo.dev/guides/typescript/
npx create-expo-app -t expo-template-blank-typescript
