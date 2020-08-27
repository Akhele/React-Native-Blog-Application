// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import indexScreen from './src/screens/indexScreen';
import React from 'react'
import { Provider } from './src/context/BlogContext';
import ShowBlog from './src/screens/ShowBlog';
import CreateBlog from './src/screens/CreateBlog';

const navigator = createStackNavigator({
  Index: indexScreen,
  ShowBlog: ShowBlog,
  CreateBlog: CreateBlog
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
            <App/>
        </Provider>
}
