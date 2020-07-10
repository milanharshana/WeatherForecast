import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={Styles.bg}>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#262626',
  },
});
