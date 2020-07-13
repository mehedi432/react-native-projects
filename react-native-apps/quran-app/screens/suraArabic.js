import React, { Component } from 'react'
import {Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { ListItem, Badge } from 'react-native-elements'
import sura from '../data/sura.json'

export class SuraArabic extends Component {

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
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
              <View>
                <ListItem
                  onPress={() => {
                    this.props.navigation.navigate('SuraArabicDetails', {
                      sura_name: item.titleAr,
                      sura_no: item.sura_no,
                    });
                  }}
                  key={item}
                  title={"سورة"+ "  " + item.titleAr }
                  titleStyle={{ textAlign: 'right', fontSize: 21}}
                  leftElement={item.sura_no}
                  containerStyle={{backgroundColor: 'blanchedalmond'}}
                  topDivider
                  chevron
                />
                {/* <Text>{item.sura_no}</Text> */}
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SuraArabic
