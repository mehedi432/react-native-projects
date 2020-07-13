import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import ayats_en from '../data/ayats_en.json';


export default class SuraArabicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, // Check if data is loading
      dataSource: [],
    }
  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: "Surah "+ " " + this.props.route.params.sura_name });
    this.setState({ name: this.props.route.params.name, isLoading: false, dataSource: ayats_en.ayats });
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
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <ListItem
                  key={item}
                  titleStyle={{fontSize: 17, textAlign: 'left' }}
                  title={item.text}
                  containerStyle={{backgroundColor: 'blanchedalmond'}}
                  leftElement={item.aya + " |"}
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
