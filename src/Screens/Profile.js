import React from 'react';
import {View, StyleSheet, Image, Text, ImageBackground} from 'react-native';
import Home from './Home';
import {Avatar} from 'react-native-paper';
const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qz9VaC-3BkCx2u7GhtGQZPyWADL3QWhC1DwM9IED315_M7m1i7JGFWIatI8KJKe8M6o&usqp=CAU',
};
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.Header}>
          <View style={styles.imgandname}>
            <Image
              style={styles.images}
              source={require('../../assets/profile.png')}
            />
            <Text style={styles.myname}>@Level 4</Text>
          </View>
        </View>
        <View style={styles.Allcards}>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUa3Kr0a29SD2hLFd8ZM09m37UNZnz9iQjg&usqp=CAU',
              }}
              size={60}
            />
            <Text style={styles.txt}>Omar Bassam Shaheen </Text>
          </View>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GR9UPEeJRlMsrOUb9wVDUOQb_4jGq3Po3g&usqp=CAU',
              }}
              size={60}
            />
            <Text style={styles.txt}>memogames302@gmail.com </Text>
          </View>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81XbWhkSL6nudDIrPXvc6J5Z4yNcUdzq4dg&usqp=CAU',
              }}
              size={60}
            />
            <Text style={styles.txt}>Software Engineering</Text>
          </View>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_f73ck_4MIkHSx6mPSUsRl0k_QDF1SGzytg&usqp=CAU',
              }}
              size={60}
            />
            <Text style={styles.txt}>
              JS , React , PHP , Python , SQL , JAVA
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  Header: {
    backgroundColor: 'white',
    width: 400,
    height: 80,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#E1E1E1',
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 75,
    marginTop: 20,
    borderWidth: 5,
    borderColor: '#02CDFF',
  },
  myname: {
    width: 250,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#000',
  },
  Card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 48,
    borderRadius: 10,
    height: 90,
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    marginLeft: 20,
    marginBottom: 30,
  },
  Allcards: {
    marginTop: 50,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Profile;
