import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Login from './src/screens/Login';

export default class App extends React.Component {

  state = {
    title: "Good bye"
  }

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        
        <Login title={this.state.title} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
