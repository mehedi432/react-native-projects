import React, { Component } from 'react'
import { FlatList, View, Alert } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'
import sura from '../data/sura.json'


export default class audioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isLoading: true, // Check if data is loading
      dataSource: [],
    }
  }

  componentDidMount() {
    this.setState({ name: this.props.route.params.name, isLoading: false, dataSource: sura.names });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
              <View>
                <ListItem
                  key={item}
                  title={"সূরা " + item.sura_name}
                  titleStyle={{ fontSize: 17 }}
                  rightElement={item.sura_no,
                    <Icon
                      onPress={() => {
                        Alert.alert('Sorry', 'We are working on this module.');
                        let route = "http://192.168.0.112:8000/api/quran/audio";
                        fetch(route)
                          .then(respose => respose.json())
                          .then(data => {
                            console.log(data[10]['audio']);
                          })
                          .catch(err => console.log(err));
                      }}
                      name='play-circle'
                      type='feather' size={21} />
                  }
                  containerStyle={{ backgroundColor: 'blanchedalmond' }}
                  topDivider
                  bottomDivider
                />
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}