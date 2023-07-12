import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qz9VaC-3BkCx2u7GhtGQZPyWADL3QWhC1DwM9IED315_M7m1i7JGFWIatI8KJKe8M6o&usqp=CAU',
};
const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const submit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Pleas Fill all Data');
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
          <Image
            style={styles.images}
            source={require('../../assets/contact.png')}
          />
          <View style={styles.allinputcontainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.labels}> Enter your name </Text>
              <TextInput
                style={styles.inputStyle}
                placeholder={'Full Name'}
                value={name}
                onChangeText={userdata => setName(userdata)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labels}> Enter your Email </Text>
              <TextInput
                style={styles.inputStyle}
                placeholder={'Example@Email.com'}
                value={email}
                onChangeText={email => setEmail(email)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labels}> Enter your mobile </Text>
              <TextInput
                style={styles.inputStyle}
                placeholder={'+970 OR +972'}
                value={phone}
                onChangeText={phone => setPhone(phone)}
                keyboardType={'numeric'}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labels}> How can we help you? </Text>
              <TextInput
                style={[styles.inputStyle]}
                placeholder={'Tell us about your self'}
                value={message}
                onChangeText={message => setMessage(message)}
                numberOfLines={4}
                multiline={true}
              />
            </View>
          </View>
          <TouchableOpacity onPress={submit} style={styles.btncontact}>
            <Text style={styles.buttonText}> Contact Us </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Contact;
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#003f5c',
  },
  mainHeader: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'JosefinSans_500Medium',
    textTransform: 'capitalize',
    marginTop: 10,
  },

  inputContainer: {
    width: 355,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  allinputcontainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  labels: {
    fontWeight: 'bold',
    // fontSize: 15,
    color: '#000',
    paddingBottom: 5,
    fontFamily: 'JosefinSans_300Light',
    lineHeight: 25,
    fontSize: 18,
  },
  inputStyle: {
    fontSize: 20,
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    width: 300,
    textAlign: 'center',
  },

  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  btncontact: {
    marginLeft: 50,
    marginTop: 15,
    height: 50,
    borderRadius: 50,
    width: '80%',
    backgroundColor: '#FF2571',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  images: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginLeft: 130,
  },
});
