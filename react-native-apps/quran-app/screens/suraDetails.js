import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import ayats_bn from '../data/ayats_bn.json';


export default class suraDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, // Check if data is loading
      dataSource: [],
      ayat: '',
    }
  }

  onSave = async () => {
    const { ayat } = this.state

    try {
      await AsyncStorage.setItem(key, ayat);
      Alert.alert('Saved', 'Successful');
    } catch (error) {
      Alert.alert('Error', 'There was an error.')
    }
  }

  onChange = (ayat) => {
    this.setState({ ayat });
  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: "সূরা " + this.props.route.params.sura_name });
    this.setState({ name: this.props.route.params.name, isLoading: false, dataSource: ayats_bn.ayats });
  }

  render() {
    const data = this.state.dataSource.filter(data => data.sura === this.props.route.params.sura_no);

    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }



    return (
      <View >
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <ListItem
                  onLongPress={() => {
                    Alert.alert('এই আয়াতটি সংরক্ষণ করুন', item.text,
                      [
                        {
                          'text': 'Save',
                          onPress: async () => {
                            this.onSave;
                            Alert.alert('Successful', 'Item saved Successfully')
                          }
                        },
                        {
                          'text': 'Cancel',
                          style: 'cancel',
                        },
                      ]
                    );
                  }}
                  containerStyle={{ backgroundColor: 'blanchedalmond' }}
                  key={item}
                  titleStyle={{ fontSize: 17, letterSpacing: 1.6, }}
                  title={item.text}
                  badge={{ value: item.aya, textStyle: { color: 'white', }, badgeStyle: { backgroundColor: 'black', } }}
                  bottomDivider
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
