import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import FirstPage from '../components/FirstPage';

const feeling = ['Excited', 'Energetic', 'Playful', 'Creative', 'Aware', 'Other'];


class FeelingSecond extends React.Component {

  constructor(props) {
    super(props);
  }


  FeelingButtonComponent(text) {
    return(
      <RectButton style={[styles.option]} type='Text'>
        <View>
            <Text style={styles.optionText}>{text}</Text>
        </View>
      </RectButton>
    );
  }


render(){
  console.log("enteringgggggg")
  const { text } = this.props;
 return (
   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
   <View style={styles.contentContainer}>
   <Text style={styles.mainHead} >How are you {'\n'} feeling today? </Text>
   <Image source={require('../assets/images/feeling-second.png')} style = {styles.feelingImg}/>
   <Text style={styles.regularText}> I feel {text}. </Text>
   <Text style={styles.miniText} onPress={this.MoveToPreviousPage}> I change my mind </Text>
   <Text style={styles.regularText} > More Specifically,{'\n'} I feel: </Text>
   </View>
   <View>
   <View style={styles.finalrow}>
     {feeling.map((text) => {return(this.FeelingButtonComponent(text))})}
  </View>
   </View>

   </ScrollView>

  );
 }
}

export default FeelingSecond;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
  },
  contentContainer: {
    paddingTop: 20,
  },
  mainHead: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  regularText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
  },
  feelingImg: {
    width: 120,
    height: 120,
    resizeMode: 'center',
    marginTop: 40,
    marginLeft: 140,
  },
  miniText: {
    fontSize: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'white',
  },
  option: {
   // backgroundColor: '#fdfdfd',
    backgroundColor: '#2D709E',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    //borderBottomColor: 'white',
  },
  optionText: {
    fontSize: 25,
    marginTop: 1,
    color: 'white',
    textAlign: 'center',
  },
  finalrow: {
    marginTop: 35,
  },
});
