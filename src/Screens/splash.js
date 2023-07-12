import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Splash = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    {
      image: require('../../assets/s.png'),
      key: 'hfghghgh-hghghghgh',
      title: 'Easy To Search',
      description:
        'Maecenas elementum est ut nulla blandit ultrices. Nunc quis ipsum urna. Aenean euismod sollicitudin nunc, ut rutrum magna ultricies eget',
    },
    {
      image: require('../../assets/ss.png'),
      title: 'Easy To Access',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat elementum laoreet. Nunc id quam et eros molestie finibus',
    },
    {
      image: require('../../assets/gpt.png'),
      title: 'ChatGpt Services',
      description:
        'Mauris vulputate interdum nibh vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
    },
  ]);
  const nextStep = () => {
    setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1);
  };
  return (
    <View style={styles.container}>
      <Image
        source={steps[currentStep].image}
        style={styles.stepImage}
        resizeMode="cover"
      />
      <View style={styles.stepIndicatorView}>
        {steps.map((step, index) => {
          return (
            <View
              style={{
                ...styles.stepIndicator,
                width: currentStep === index ? 40 : 30,
                backgroundColor: currentStep === index ? '#A838D7' : 'gray',
              }}></View>
          );
        })}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].description}</Text>
      <View style={styles.navigationView}>
        {currentStep > 0 ? (
          <TouchableOpacity
            onPress={() => prevStep()}
            style={{
              ...styles.navigationBtn,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomEndRadius: 20,
            }}>
            <Text style={styles.navigationBtnTxt}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <TouchableOpacity
          onPress={() => nextStep()}
          style={{
            ...styles.navigationBtn,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
          }}>
          <Text style={styles.navigationBtnTxt}>Next</Text>
        </TouchableOpacity>
        {currentStep === 2 ? (
          <TouchableOpacity
            onPress={() => navigation.push('Home')}
            style={{
              ...styles.navigationBtn,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              borderBottomStartRadius: 20,
              borderBottomEndRadius: 20,
            }}>
            <Text style={styles.navigationBtnTxt}>GO</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
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
  stepImage: {
    width: '100%',
    height: '50%',
    marginVertical: 30,
    resizeMode: 'cover',
  },
  stepIndicatorView: {
    flexDirection: 'row',
  },
  stepIndicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  navigationBtn: {
    backgroundColor: '#A838D7',
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Splash;
