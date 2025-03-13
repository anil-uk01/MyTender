import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions/authActions';

function Logout() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(logout())}>
        <Text style={styles.buttonText}>Logout </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: 20,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#007bff',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Logout;
