import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {admin_login, login} from '../redux/actions/authActions';

const SignInScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => dispatch(login())}>
        <Text style={styles.buttonText}>User Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account? {''}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 30,
          backgroundColor: '#007bff',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 10,
          shadowColor: '#007bff',
          shadowOpacity: 0.4,
          shadowRadius: 6,
          elevation: 2,
        }}
        onPress={() => dispatch(admin_login())}>
        <Text style={styles.buttonText}>Admin Section</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
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
  signupText: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
