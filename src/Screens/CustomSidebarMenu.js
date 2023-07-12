// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View style={styles.headerDrawer}>
        <Image
          style={styles.images}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.upinar}>Upinar</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.headerDrawer2}>
        <Text style={styles.upinar}>POWERED BY </Text>
        <Image
          style={styles.moodle}
          source={require('../../assets/moodle.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  images: {
    borderWidth: 6,
    borderColor: 'white',
    resizeMode: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDrawer: {
    backgroundColor: '#009BFF',
    borderRadius: 10,
    height: 140,
  },
  upinar: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  headerDrawer2: {
    backgroundColor: '#009BFF',
    borderRadius: 10,
    height: 230,
  },
  moodle: {
    width: 200,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default CustomSidebarMenu;
