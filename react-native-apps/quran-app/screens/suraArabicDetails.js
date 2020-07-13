import React, { Component } from 'react';
import { Text, FlatList, View, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import ayats_ar from '../data/ayats_ar.json';


export default class SuraArabicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, // Check if data is loading
      dataSource: [],
    }
  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: "سورة " + " " + this.props.route.params.sura_name });
    this.setState({ name: this.props.route.params.name, isLoading: false, dataSource: ayats_ar.ayats });
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
          containerStyle={{ backgroundColor: 'blanchedalmond' }}
          data={data}
          renderItem={({ item }) => {
            return (
              <ListItem
                containerStyle={{ backgroundColor: 'blanchedalmond' }}
                key={item}
                titleStyle={{ fontSize: 21, textAlign: 'right', letterSpacing: 1.6 }}
                title={item.ayat}
                leftElement={item.VerseIDAr}
                bottomDivider
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
