import React from 'react';
import {Avatar} from 'react-native-paper';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qz9VaC-3BkCx2u7GhtGQZPyWADL3QWhC1DwM9IED315_M7m1i7JGFWIatI8KJKe8M6o&usqp=CAU',
};
const Home = ({navigation}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#003f5c',
        borderTopLeftRadius: 500,
      }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={styles.images}
              source={require('../../assets/profile.png')}
            />
          </TouchableOpacity>
          <Text style={styles.profileName}>Omar Bassam Shaheen</Text>
          <View style={styles.Avatar}>
            <Avatar.Image
              style={styles.Ava1}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpOA74Glq6vsepfXx9uv3au4MyOr0ta4AYQ&usqp=CAU',
              }}
              size={40}
            />
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwnVapYRjH5GEiYfYY8fm8QtdBOf_N6XLDg&usqp=CAU',
              }}
              size={25}
            />
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwnVapYRjH5GEiYfYY8fm8QtdBOf_N6XLDg&usqp=CAU',
              }}
              size={25}
            />
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwnVapYRjH5GEiYfYY8fm8QtdBOf_N6XLDg&usqp=CAU',
              }}
              size={25}
            />
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwnVapYRjH5GEiYfYY8fm8QtdBOf_N6XLDg&usqp=CAU',
              }}
              size={25}
            />
          </View>
        </View>
        <ScrollView style={styles.scrollView} vertical={true}>
          <View style={{flexDirection: 'column'}}>
            {/* المساق الاول  */}
            <View
              style={[
                styles.shadowContainerStyle,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: 350,
                  margin: 20,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Mobile Proggramming')}>
                  <Image
                    style={styles.courseImage}
                    source={require('../../assets/mobile2.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* المساق الثاني   */}
            <View
              style={[
                styles.shadowContainerStyle,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: 350,
                  margin: 20,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('WEB Programming')}>
                  <Image
                    style={styles.courseImage}
                    source={require('../../assets/web.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* المساق الثالث  */}

            <View
              style={[
                styles.shadowContainerStyle,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: 350,
                  margin: 20,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Information Security')}>
                  <Image
                    style={styles.courseImage}
                    source={require('../../assets/is.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* المساق الرابع  */}

            <View
              style={[
                styles.shadowContainerStyle,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: 350,
                  margin: 20,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Engineering Economy')}>
                  <Image
                    style={styles.courseImage}
                    source={require('../../assets/economic.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* المساق الخامس  */}
            <View
              style={[
                styles.shadowContainerStyle,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: 350,
                  margin: 20,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <View style={styles.title}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Distributed System')}>
                  <Image
                    style={styles.courseImage}
                    source={require('../../assets/system.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 200,
    backgroundColor: '#fff',
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 120,
  },
  title: {
    // flexDirection: 'row',
  },
  courseImage: {
    width: 340,
    height: 190,
    borderRadius: 40,
  },
  shadowContainerStyle: {
    //<--- Style with elevation
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'white',
    borderBottomWidth: 0,
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#fff',
  },

  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 140,
    marginTop: 20,
    borderWidth: 5,
    borderColor: '#009BFF',
  },
  profileName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 1,
    height: 480,
  },
  Ava: {
    marginLeft: 0,
    marginTop: 5,
  },

  Avatar: {
    flexDirection: 'row',
    marginLeft: 122,
  },
});
export default Home;
