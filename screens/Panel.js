import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';

class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            expanded    : false,
            animation   : new Animated.Value(100)
        };
  }

 toggle() {
  console.log("exp",this.state.expanded);
   let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded  //Step 2
    });

    this.state.animation.setValue(initialValue);  //Step 3
    Animated.spring(     //Step 4
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();  //Step 5
 }

 _setMaxHeight(event){
    this.setState({
        maxHeight   : event.nativeEvent.layout.height
    });
}

_setMinHeight(event){
    this.setState({
        minHeight   : event.nativeEvent.layout.height
    });
}

  render() {
    let lable = "keyboard-arrow-down";
    if(!this.state.expanded){
      lable = "keyboard-arrow-right";   //Step 4
    }
    return(
      <Animated.View
            style={[styles.container,{height: this.state.animation}]}>
        <View style={styles.outerCards} onLayout={this._setMinHeight.bind(this)}>
          <View style={styles.outerCardsText}>
            <Text style={styles.outerCardTextStyle}>{this.props.text}</Text>
            <Text style={styles.outercardSecondTextStyle}>{this.props.extendedText}</Text>
          </View>
          <View style={styles.moreContainer}>
            <Icon name={lable} size={50} color= 'black' onPress={this.toggle.bind(this)}/>
          </View>
        </View>
        <View style={styles.outerCards} onLayout={this._setMaxHeight.bind(this)}>
          <View style={styles.outerCardsText}>
          <Text style={styles.outercardSecondTextStyle}>{this.props.displayText}</Text>
          </View>
        </View>
    </Animated.View>
   );
 }

}

export default Panel;

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:40,
    margin: 10,
    overflow:'hidden',
    borderRadius: 10,
  },

  outerCardTextStyle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  outercardSecondTextStyle: {
    marginTop: 10,
  },
  moreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCards: {
    borderRadius:10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  outerCardsText: {
    flex: 1,
    flexDirection: 'column'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
