import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import  VerticalSlider from 'rn-vertical-slider';

import FeelingSecond from './FeelingSecond';
import { feelingsaction } from '../actions/feelingsaction';


let sampleText = "";
let sampleImage = "";
let buttonClicked = ""


const mapStateToProps = state => ({
  buttonValue: state.feelingReducer.buttonValue,
  imageValue: state.feelingReducer.imageValue,
});


const mapDispatchToProps = dispatch => ({
   action: (sampleText, sampleImage) => dispatch(feelingsaction(sampleText, sampleImage)),
});

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
             buttonClicked: false,
        };
  }

 FeelingButtonComponent(value) {
   const { action } = this.props;
   switch(value) {
      case 1:
        sampleText = 'SAD';
        sampleImage = require('../assets/images/emotions/sad1.png');
        break;
      case 2:
        sampleText = 'MAD';
        sampleImage = require('../assets/images/emotions/MAD1.png');
        break;
      case 3:
        sampleText = 'SCARED';
        sampleImage = require('../assets/images/emotions/scared1.png');
        break;
      case 4:
        sampleText = 'JOYFUL';
        sampleImage = require('../assets/images/emotions/joyful1.png');
        break;
      case 5:
        sampleText = 'POWERFUL';
        sampleImage = require('../assets/images/emotions/powerful1.png');
        break;
      case 6:
        sampleText = 'PEACEFUL';
        sampleImage = require('../assets/images/feeling-second.png');
        break;
      default:
        sampleText = null;
      }
      action(sampleText, sampleImage);
  }

NextPage() {
  this.setState({
      buttonClicked: true,
  });
}


render(){
const { buttonClicked } = this.state;
const {buttonValue, imageValue } = this.props;
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



export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);


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
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: -200,
    marginLeft: -200,
    borderRadius: 450,
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
