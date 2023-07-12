import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qz9VaC-3BkCx2u7GhtGQZPyWADL3QWhC1DwM9IED315_M7m1i7JGFWIatI8KJKe8M6o&usqp=CAU',
};
function Course({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} vertical={true}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacTmPUhMH8T2wz8HfeL46jHZ_YcQjcwTfrw&usqp=CAU',
              }}
              size={65}
            />
            <Text style={styles.courseNAME}>Mobile Programming Course</Text>
            <Text style={styles.courseNAME}>BSWE4331</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.download}>
                <Text style={styles.TXTdownload}>Download</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Grade')}
                style={styles.download}>
                <Text style={styles.TXTdownload}>Grade</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 1 : Setup React Native Environment
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 2 : Create New Project </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 3 : Props And State</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              QUIZ: Stack and Drawer And Tab navigation
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 4 : Stack and Drawer And Tab navigation
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

export default Course;
const styles = StyleSheet.create({
  container: {flex: 1},

  Card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 48,
    borderRadius: 10,
    height: 200,
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  courseNAME: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  Ava: {
    top: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  download: {
    width: 100,
    backgroundColor: '#FF2571',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 18,
    marginTop: 10,
  },
  TXTdownload: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    marginHorizontal: 1,
    height: 480,
  },
  Card2: {
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
  open: {
    width: 100,
    backgroundColor: '#009BFF',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 18,
    marginTop: 10,
  },
  openTXT: {
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  file: {
    color: 'black',
    fontWeight: 'bold',
  },
});
