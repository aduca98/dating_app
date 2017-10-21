import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import Login from './src/screens/Login';
import RootNavigation from './src/navigation/RootNavigation';

export default class App extends React.Component {

  state = {
    title: "Good bye"
  }

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RootNavigation />
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
