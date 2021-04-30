import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import bgService from './src/services/RemoteControlListener';
// import { LogBox } from 'react-native';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => bgService);

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications