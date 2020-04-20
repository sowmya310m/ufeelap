import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';


import  VerticalSlider from 'rn-vertical-slider';

import FeelingSecond from './FeelingSecond';



let sampleText = null;
let sampleImage = null;

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
             buttonValue: null,
             imageValue: null,
             buttonClicked: false,
        };
  }


 FeelingButtonComponent(value) {
   switch(value) {
      case 1:
        sampleText = 'SAD';
        break;
      case 2:
        sampleText = 'MAD';
        break;
      case 3:
        sampleText = 'SCARED';
        break;
      case 4:
        sampleText = 'JOYFUL';
        sampleImage = require('../assets/images/feeling-second.png');
        break;
      case 5:
        sampleText = 'POWERFUL';
        break;
      case 6:
        sampleText = 'PEACEFUL';
        break;
      default:
        sampleText = null;
      }
   this.setState({
       buttonValue : sampleText,
       imageValue: sampleImage //Step 2
   });
  }

NextPage() {
  this.setState({
      buttonClicked: true,
  });
}

// renderButton() {
//   const {buttonValue, imageValue} = this.state;
//   return(
//   <View>
//   {
//   buttonValue &&
//   <View>
//   <Image source={imageValue} style = {styles.feelingImg}/>
//   <RectButton style={styles.option} type='Text' onPress={this.NextPage.bind(this)}>
//       <View>
//           <Text style={styles.optionText}> {buttonValue} </Text>
//       </View>
//   </RectButton>
//   </View>
// }
//   </View>
// );
// }


render(){
const { buttonValue,imageValue, buttonClicked } = this.state;
console.log(buttonValue);
 return (
   <View style={styles.contentContainer}>
   {
   buttonClicked &&
   <FeelingSecond  text={buttonValue}/>
   }
   {
    !buttonClicked &&
   <View>
   <Text style={styles.mainHead} >How are you {'\n'} feeling today? </Text>
   <View style={styles.sliderStyle}>
   <VerticalSlider
          value={0}
          disabled={false}
          min={0}
          max={6}
          width={30}
          height={300}
          step={1}
          onChange={this.FeelingButtonComponent.bind(this)}
          borderRadius={20}
          minimumTrackTintColor={'white'}
          maximumTrackTintColor={"#173f5f"}
    />
    <View>
      {
      buttonValue &&
      <View>
      <Image source={imageValue} style = {styles.feelingImg}/>
      <RectButton style={styles.option} type='Text' onPress={this.NextPage.bind(this)}>
          <View>
              <Text style={styles.optionText}> {buttonValue} </Text>
          </View>
      </RectButton>
      </View>
     }
      </View>
    </View>
   </View>
   }
   </View>
  );

 }
}

export default FirstPage;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#2D709E',
  },
  mainHead: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginTop: 40,
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
    marginTop: -200,
    marginLeft: -200,
  },
  sliderStyle: {
    width:300,
    marginLeft: 300,
    marginTop: 100,
    color: '#173F5F'
  },
  miniText: {
    fontSize: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: 'white',
  },
  option: {
   // backgroundColor: '#fdfdfd',
    backgroundColor: '#66D3FA',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    width: 170,
    height: 70,
    marginLeft: -180,
    marginTop: 150,
    borderRadius: 10,
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
