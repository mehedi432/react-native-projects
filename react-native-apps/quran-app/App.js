import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { ThemeProvider, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/home';
import Sura from './screens/sura';
import SuraArabic from './screens/suraArabic';
import SuraDetails from './screens/suraDetails';
import SuraArabicDetails from './screens/suraArabicDetails';
import SuraEnglishDetails from './screens/suraEnglishDetails';
import SuraEnglish from './screens/suraEnglish'
import AudioScreen from './screens/audioScreen';
import SavedScreen from './screens/savedScreen';

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <ThemeProvider>
        <View style={styles.container}>
          <StatusBar hidden />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitleAlign: "center",
                headerStatusBarHeight: 55,
                title: "আল-কোরআন", headerTransparent: true, headerTintColor: 'snow', headerTitleStyle: { fontWeight: 'normal', fontSize: 34 }
              }} />

            <Stack.Screen
              name='Sura'
              component={Sura}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerTitleAlign: "center", title: "সূরা সমূহ", headerTransparent: false, headerTintColor: 'snow', headerStyle: { backgroundColor: '#333333' },
              }}
            />
            <Stack.Screen
              name='AudioScreen'
              component={AudioScreen}
              options={{
                headerTitleAlign: "center",
                title: "অডিও", headerTintColor: 'snow',
                headerStyle: { backgroundColor: '#333333' },
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
              }}
            />

            <Stack.Screen
              name='SuraEnglish'
              component={SuraEnglish}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerStyle: { backgroundColor: '#333333' }, headerTitleAlign: "center", title: "Surah", headerTintColor: 'snow',
              }}
            />

            <Stack.Screen
              name='SuraArabic'
              component={SuraArabic}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerTitleAlign: "center", title: "سورة", headerTintColor: 'snow', headerStyle: { backgroundColor: '#333333' }
              }}
            />
            <Stack.Screen
              name='SuraArabicDetails'
              component={SuraArabicDetails}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerTitleAlign: "center", 
                title: "سورة", 
                headerTintColor: 'snow', headerStyle: { backgroundColor: '#333333' }
              }}
            />
            <Stack.Screen
              name='SuraEnglishDetails'
              component={SuraEnglishDetails}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerTitleAlign: "center", 
                title: "Emglish", 
                headerTintColor: 'snow', 
                headerStyle: { backgroundColor: '#333333' }
              }}
            />

            <Stack.Screen
              name='SuraDetails'
              component={SuraDetails}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerTitleAlign: "center", 
                headerStyle: { backgroundColor: '#333333' }, 
                headerTintColor: 'snow',
              }}
            />

            <Stack.Screen
              name='SavedScreen'
              component={SavedScreen}
              options={{
                headerRight: () => (
                  <View style={{ marginRight: 13 }}>
                    <Icon
                      name='more-vertical'
                      type='feather' color={"snow"}
                      onPress={() => alert('This is a button!')} />
                  </View>
                ),
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: '#333333' },
                headerTintColor: 'snow',
              }}
            />
          </Stack.Navigator>
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefd5',
    justifyContent: 'center',
  },
});
