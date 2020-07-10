import React from 'react';
import {View, StyleSheet, FlatList, Alert, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {ListItem} from 'react-native-elements';

import APIList from '../resources/APIList';
import Logo from '../component/logo';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherForecasts: [],
    };
    this.loadForecasts = this.loadForecasts.bind(this);
  }

  componentDidMount() {
    // check internet connection
    this.checkConnectivity();
  }

  renderHeader = () => {
    return <Logo />;
  };

  checkConnectivity = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        // if connection ok then load forecasts via API
        this.loadForecasts();
      } else {
        Alert.alert('You are offline!');
      }
    });

    unsubscribe();
  };

  loadForecasts() {
    fetch(APIList.getForecast)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({weatherForecasts: responseJson.list});
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Data fetching Error!!');
      });
    // references : https://medium.com/better-programming/handling-api-like-a-boss-in-react-native-364abd92dc3d
  }

  render() {
    return (
      <View style={Styles.container}>
        {/* check weather forecast availability */}
        {this.state.weatherForecasts.length > 0 ? (
          // if available render flat list
          <FlatList
            data={this.state.weatherForecasts}
            renderItem={({item}) => (
              <ListItem
                title={`${new Date(parseInt(item.dt) * 1000).toDateString()} ${
                  item.weather[0].description
                }`}
                subtitle={`humidity : ${item.humidity}, maximum temp : ${item.temp.max}`}
              />
            )}
            keyExtractor={(item) => item.dt.toString()}
            ListHeaderComponent={this.renderHeader}
          />
        ) : (
          // if not available render loading indicator
          <Text style={Styles.loadingText}>Loading...</Text>
        )}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  loadingText: {
    color: '#000',
    textAlign: 'center',
  },
});
