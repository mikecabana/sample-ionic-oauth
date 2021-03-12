# sample-ionic-oauth

## To run

### Browser

```cms
ionic serve
```

### Android emulator

1) delete `android` directory
2) delete `www` directory

> both 1 & 2 are to ensure a proper build is run in the emulator

3) run `ionic build` to generate a new `www` directory
4) run `ionic capacitor add android` to generate a new `android` directory
5) run `ionic capacitor open android` which will open android studio and load your app
6) set up an emulator then click play to start your app in the android device emulator

### iOS Emulator

1) delete `ios` directory
2) delete `www` directory

> both 1 & 2 are to ensure a proper build is run in the emulator

3) run `ionic build` to generate a new `www` directory
4) run `ionic capacitor add ios` to generate a new `ios` directory
5) run `ionic capacitor open ios` which will open xcode and load your app
6) update your `URL Schemes` in `Info.plist` using the same appId as in you `capacitor.config.json`
7) chose a device then click play to start your app in the ios device emulator

