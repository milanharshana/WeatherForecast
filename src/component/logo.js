import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Logo() {
  return (
    <View style={Styles.brandContainer}>
      <Text style={Styles.brand}>WeatherForecast</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '10%',
  },
  brand: {
    color: '#000',
    fontSize: 36,
  },
});
