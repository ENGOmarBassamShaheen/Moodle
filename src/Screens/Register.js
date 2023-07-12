import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
const Register = ({navigation}) => {
  const [FirstN, setFirstN] = useState('');
  const [LasrN, setLasrN] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setrePassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />

      <Image style={styles.images} source={require('../../assets/logs.png')} />
      <Text style={styles.logo}>Register</Text>
      <View style={styles.box}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name"
            placeholderTextColor="#BFBFBF"
            onChangeText={text => setFirstN(text)}
            keyboardType="text"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name"
            placeholderTextColor="#BFBFBF"
            onChangeText={text => setLasrN(text)}
            keyboardType="text"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#BFBFBF"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#BFBFBF"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="#BFBFBF"
            onChangeText={text => setrePassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('My course')}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.addaccount}>
        <Text>I have already Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.register}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#009BFF',
    marginBottom: 40,
    fontFamily: 'Pacifico-Regular',
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 3,
    borderColor: '#009BFF',
  },
  box: {
    width: '90%',
    backgroundColor: '#E2FBFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    height: 300,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  loginBtn: {
    width: '80%',
    backgroundColor: '#009BFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  privacy: {
    color: '#009BFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  copyright: {
    color: '#000',
    fontSize: 20,
    opacity: 0.5,
    marginTop: 50,
  },
  addaccount: {
    flexDirection: 'row',
    padding: 5,
  },
  register: {
    color: '#009BFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
export default Register;
