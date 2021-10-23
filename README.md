### Install

At the root:

1. `npm install` to install dependencies
2. `cd ios && pod install` to install necessary files for iOS
3. `npm run start` to start Metro Bundler
4. `npm run android/ios` to start Android/iOS application

### Troubleshooting

**`pod install` error (M1 compatibility)**

- In regular terminal, outside the project directory:
  `sudo arch -x86_64 gem install ffi`

- Inside iOS folder:
  `arch -x86_64 pod install`
