## Base
yarn start
yarn android

## Testing
yarn clean:android

detox build --configuration android
detox test --configuration android

detox test --configuration android --record-logs all

