import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './Login';
import Privacy from './Privacy';
import Repassword from './Repassword';
import Home from './Home';
import Course from './Course';
import Contact from './Contact';
import Profile from './Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Grade from './Grade';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, Button} from 'react-native';
import Register from './Register';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CustomSidebarMenu from './CustomSidebarMenu';
import {Avatar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Row} from 'react-native-table-component';
import Splash from './splash';
const Stack = createStackNavigator();
// stack Navigator
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          //   flex: 1,
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="spalsh"
        component={Splash}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="register"
        component={Register}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{
          title: 'Privacy',
          headerStyle: {
            backgroundColor: '#009BFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Repassword"
        component={Repassword}
        options={{headerShown: false}}
      />
      <Stack.Screen name="WEB Programming" component={Web} options={{}} />
      <Stack.Screen name="Information Security" component={IS} options={{}} />
      <Stack.Screen name="Distributed System" component={DS} options={{}} />
      <Stack.Screen
        name="Engineering Economy"
        component={Economy}
        options={{}}
      />
      <Stack.Screen
        name="Mobile Proggramming"
        component={Course}
        options={{}}
      />
      <Stack.Screen name="Contact Us" component={Contact} />
      <Stack.Screen name="Profile" component={MyTabs} />
      <Stack.Screen
        name="Home"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Grade" component={Grade} />
    </Stack.Navigator>
  );
}
// Drawer Navigator

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 260,
          fontWeight: 'bold',
        },
      }}
      drawerPosition="left"
      initialRouteName="My course"
      drawerStyle={{width: 250}}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="My course"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#009BFF',
          },
          headerRight: () => <Button title="Update count" />,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={MyTabs}
        options={{
          headerStyle: {
            backgroundColor: '#009BFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={Privacy}
        options={{
          headerStyle: {
            backgroundColor: '#009BFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}
      />
      <Drawer.Screen
        name="Contact us"
        component={Contact}
        options={{
          headerStyle: {
            backgroundColor: '#009BFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}
      />
      <Drawer.Screen
        name="LOGOUT"
        component={Login}
        options={{
          headerShown: false,

          headerStyle: {
            backgroundColor: '#009BFF',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
// Tab Navigator

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Details"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../assets/profile1.png')}
              style={{
                width: 45,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Grade"
        component={Grade}
        options={({tabBarBadge: 4}, {headerShown: false})}
      />
    </Tab.Navigator>
  );
}
export default function AppContainer() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

// Web page
const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qz9VaC-3BkCx2u7GhtGQZPyWADL3QWhC1DwM9IED315_M7m1i7JGFWIatI8KJKe8M6o&usqp=CAU',
};
function Web({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} vertical={true}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8x0qRHdhDt5FXBedb1gb5dZE8WJ4bb_JXQ&usqp=CAU',
              }}
              size={75}
            />
            <Text style={styles.courseNAME}>Web Programming Course</Text>
            <Text style={styles.courseNAME}>BSWE4327</Text>
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
              Lecture 1 :Introduction in HTML Language
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 2 : Create simple HTML page</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 3 : Introduction in CSS Language
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 4 : Create Page include HTML And CSS
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
// IS page

function IS({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} vertical={true}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxepRsMowZhDyOWwdxvUQM5zbpPLrEY4WhLg&usqp=CAU',
              }}
              size={75}
            />
            <Text style={styles.courseNAME}>Information Security Course</Text>
            <Text style={styles.courseNAME}>BSWE4327</Text>
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
              Lecture 1 :Threats And Vulnerability
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 2 : Risk Management </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 3 : NIST And ISO Organization
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 4 : Social Engineering</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
// Economy Page
function Economy({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} vertical={true}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPgRdzeXhwr_APj9YAP3OHJSs_j7DIM_a6Q&usqp=CAU',
              }}
              size={75}
            />
            <Text style={styles.courseNAME}>Engineering Economy Course</Text>
            <Text style={styles.courseNAME}>BSWE4327</Text>
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
            <Text style={styles.file}>Lecture 1 :Simple Interst</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 2 : Compunde Interst</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 3 : Cashflow Diagrams</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 4 : Gradiant and Effictive And nominal
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
// DS page

function DS({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} vertical={true}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.Card}>
            <Avatar.Image
              style={styles.Ava}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwhelRx0wkx52GUbLkwEfroOvYCSNN-aLAQ&usqp=CAU',
              }}
              size={75}
            />
            <Text style={styles.courseNAME}>Disributed System Course</Text>
            <Text style={styles.courseNAME}>BSWE4327</Text>
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
            <Text style={styles.file}>Lecture 1 :Software Architicture</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 2 : System Architicture</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>
              Lecture 3 : Client And Server Connection
            </Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Card2}>
            <Text style={styles.file}>Lecture 4 : Peer To Peer Connection</Text>
            <TouchableOpacity style={styles.open}>
              <Text style={styles.openTXT}>Open</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
console.disableYellowBox = true;
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
