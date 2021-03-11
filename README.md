# sample-ionic-oauth

## To run

### Browser

```cms
ionic serve
```

### Android emulator

1) delete `android` directory
2) delete `www` directory

> bothe 1 & 2 are to ensure a propper build is run in the emulator

3) run `ionic build` to generate a new `www` directory
4) run `ionic capacitor add android` to generate a new android directory
5) run `ionic capacitor open android` which will open android studio and load your app
6) set up an emulator then click play to start your app in the android device emulator

### iOS Emulator

todo
