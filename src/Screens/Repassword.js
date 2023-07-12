import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const Repassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={require('../../assets/logo.png')} />
      <Text style={styles.logo}> Re-Password</Text>
      <Text style={styles.textdes}>You Will Receive Instruction via Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ُEnter Yuor Email"
          placeholderTextColor="#BFBFBF"
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  images: {
    width: 160,
    height: 155,
    top: 0,
  },
  textdes: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#009BFF',
    marginBottom: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#009BFF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  privacy: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default Repassword;
