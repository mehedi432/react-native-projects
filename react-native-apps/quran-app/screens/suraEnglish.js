import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import sura from '../data/sura.json'

export class SuraEnglish extends Component {

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
                    this.props.navigation.navigate('SuraEnglishDetails', {
                      sura_name: item.eng_name,
                      sura_no: item.sura_no,
                    });
                  }}
                  containerStyle={{backgroundColor: 'blanchedalmond'}}
                  key={item}
                  title={"Surah"+ " " + item.eng_name}
                  titleStyle={{fontSize: 17}}
                  rightElement={item.sura_no}
                  topDivider
                  bottomDivider
                  chevron
                />
                {/* <Text>{item.sura_no} - {item.sura_name} {item.para} - {item.total_ayat} - {item.eng_name}</Text> */}
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


export default SuraEnglish
