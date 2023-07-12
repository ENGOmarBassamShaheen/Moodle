import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
const Privacy = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        source={require('../../assets/privacy.png')}
      />
      <Text style={styles.logo}> Privacy</Text>
      <Text style={styles.textdes}>
        The listed data will be kept for use in verifying registration
        processes, logging in, and benefiting from other university services,
        and it will not be used in any other matters that may harm the student,
        or in impersonation or misleading operations, as the data will be kept
        in the students’ data stores and will remain confidential even after the
        student graduates In the event of a request to change any private data
        such as the ID number, the Deanship of Student Affairs will be contacted
        to consider the matter.
      </Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>I Agree</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003f5c',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 800,
  },
  images: {
    width: 160,
    height: 155,
    marginLeft: 120,
    marginTop: 10,
  },
  textdes: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#009BFF',
    marginBottom: 30,
    marginLeft: 108,
    marginTop: 10,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#009BFF',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 40,
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Privacy;
