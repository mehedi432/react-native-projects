import React, { Component } from 'react'
import { Text, View, AsyncStorage, Alert } from 'react-native'


export class savedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      storedValue: '',
    }
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      this.setState({ storedValue });
    } catch (error) {
      Alert.alert('Error', 'There was an error.')
    }
  }

  render() {
    const { storedValue, text } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', elevation: 21, backgroundColor: 'snow' }}>
        <Text>{text}</Text>
      </View>
    )
  }
}

export default savedScreen
