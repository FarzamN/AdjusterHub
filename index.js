import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Text, TextInput,StatusBar} from 'react-native';

if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}


const Root = () => (
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
);

AppRegistry.registerComponent(appName, () => Root);
