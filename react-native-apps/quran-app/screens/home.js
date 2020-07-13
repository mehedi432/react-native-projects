import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback, Alert, ImageBackground } from 'react-native'
import { Card } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { Col, Grid } from "react-native-easy-grid"


export class Home extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({ title: "আল-কোরআন", });
  }

  render() {
    const image = { uri: "https://cdn.pixabay.com/photo/2015/08/11/16/27/islam-884825_960_720.jpg" };
    return (
      <React.Fragment>
        <ImageBackground blurRadius={2} source={image} style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}>

          <View style={styles.container}>
            <Grid>
              <Col>
                <TouchableNativeFeedback onPress={() => {
                  this.props.navigation.navigate('Sura', {
                    name: "bangla"
                  });
                }}>

                  <Card title="বাংলা" titleStyle={{ fontSize: 34, fontWeight: 'normal', color: 'snow', }} containerStyle={{ elevation: 1.6, borderRadius: 8, padding: 21, borderBottomEndRadius: 34, backgroundColor: '', borderWidth: 1.6, borderColor: '#888' }}>
                    <View><Icon
                      name='anchor'
                      type='font-awesome' size={34} color={"steelblue"} />
                    </View>
                  </Card>
                </TouchableNativeFeedback>
              </Col>
              <Col>
                <TouchableNativeFeedback onPress={() => {
                  this.props.navigation.navigate('SuraArabic', {
                    name: "arabic"
                  });
                }}>
                  <Card title="আরবি" titleStyle={{ fontSize: 34, fontWeight: 'normal', color: 'snow' }} containerStyle={{ elevation: 1.6, borderRadius: 8, padding: 21, borderBottomLeftRadius: 34, backgroundColor: '', borderWidth: 1.6, borderColor: '#888' }}>
                    <View><Icon
                      name='envira'
                      type='font-awesome' size={34} color={"seagreen"} />
                    </View>
                  </Card>
                </TouchableNativeFeedback>
              </Col>
            </Grid>
          </View>
          <View style={styles.container}>
            <Grid>
              <Col>
                <TouchableNativeFeedback onPress={() => {
                  this.props.navigation.navigate('SuraEnglish', {
                    name: "english"
                  });
                }}>
                  <Card title="ইংরেজি" titleStyle={{ fontSize: 34, fontWeight: 'normal', color: 'white' }} containerStyle={{ elevation: 1.6, borderRadius: 8, padding: 21, borderTopRightRadius: 34, backgroundColor: '', borderWidth: 1.6, borderColor: '#888' }}>
                    <View><Icon
                      name='superpowers'
                      type='font-awesome' size={34} color={"rebeccapurple"} />
                    </View>
                  </Card>
                </TouchableNativeFeedback>
              </Col>
              <Col>
                <TouchableNativeFeedback onPress={() => {
                  // Alert.alert('Sorry', 'Audio is not currently Available, please wait for the later update',);
                  this.props.navigation.navigate('AudioScreen', {
                    name: "english"
                  });
                }}>
                  <Card title="অডিও" titleStyle={{ fontSize: 34, fontWeight: 'normal', color: 'snow' }} containerStyle={{ elevation: 1.6, padding: 21, borderRadius: 13, borderTopLeftRadius: 34, backgroundColor: '', borderWidth: 1.6, borderColor: '#888' }}>
                    <View><Icon
                      name='leaf'
                      type='font-awesome' size={34} color={"#008080"} />
                    </View>
                  </Card>
                </TouchableNativeFeedback>
              </Col>
            </Grid>
          </View>
          <View>
            <TouchableNativeFeedback onPress={() => {
              this.props.navigation.navigate('SavedScreen', {
                name: "savedScreen"
              });
              Alert.alert('Sorry', 'Note is not implemented, please wait for the later update',);
            }}>
              <Card title="নোট ও বুকমার্ক" titleStyle={{ fontSize: 34, fontWeight: 'normal', color: 'snow' }} containerStyle={{ elevation: 1.6, borderRadius: 13, borderTopRightRadius: 34, borderTopLeftRadius: 34, padding: 34, backgroundColor: '', borderWidth: 1.6, borderColor: '#999', }}>
                <View><Icon
                  name='rebel'
                  type='font-awesome' size={55} color={"cadetblue"} />
                </View>
              </Card>
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>
      </React.Fragment>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
});

export default Home
