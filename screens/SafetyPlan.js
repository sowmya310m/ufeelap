import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Panel from './Panel';


import { MonoText } from '../components/StyledText';

const helplines = ['Mom', 'Sister', 'Friend'];

class SafetyPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  callButton() {
    alert("Shows mobile's Contacts");
  }

  SmallCardComponent(text) {
    return(
    <View>
       <Card style={styles.cardSize} >
       <Text style={styles.cardTextStyle}>{text}</Text>
       <TouchableOpacity activeOpacity = { .5 } onPress={ this.callButton}>
          <Image source={require('../assets/images/phone-image.png')} style = {styles.phoneimg} />
        </TouchableOpacity>
      </Card>
   </View>
    );
  }

  toggle() {
    this.setState({
        expanded : !this.state.expanded  //Step 2
    });
  }

  render() {
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View>
    <View >
    <Text style={styles.mainTextStyle}>{'Safety Plan'}</Text>
    </View>
    <View style={styles.finalrow}>
      {helplines.map((text) => {return(this.SmallCardComponent(text))})}
   </View>
   <View>
   <TouchableOpacity activeOpacity = { .5 } onPress={ this.callButton}>
          <Text style={styles.allContactsTextStyle}>All Contacts</Text>
    </TouchableOpacity>
    </View>
   <View>
     <Panel
      text='Step 1:'
      extendedText='Warning Signs'/>
     <Panel
      text='Step 2:'
      extendedText='Internal Coping Strategies'/>
      <Panel
      text='Step 3:'
      extendedText='People Who Can Help, Support,
       & Distract Me'/>
      <Panel
      text='Step 4:'
      extendedText='People Whom I can Ask For Help'/>
      <Panel
      text='Step 5:'
      extendedText='Professionals or Agencies I can
       Contact During Crisis'/>
      <Panel
      text='Step 6:'
      extendedText='Making the Environment Safe'/>
      </View>
   </View>
   </ScrollView>
    </ScrollView>
  );
}

}

export default SafetyPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
  },
  mainTextStyle:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 10,

    color: 'white',
  },
  finalrow: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 20,
  },
  allContactsTextStyle:{
      color: 'white',
      marginLeft: 160,
      textDecorationLine: 'underline',
  },
  cardSize : {
    width:120,
    height:150,
    borderRadius:10,
    flexDirection:'row',
    padding: 10,
    marginRight: 18,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cardTextStyle: {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 18,
  lineHeight: 22,
  textAlign: 'center',
},
phoneimg: {
  margin: 35,
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
    height:100,
    borderRadius:10,
    padding: 15,
    marginTop: 30,
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
    marginTop: 25,
    marginLeft: 5,
    paddingTop: 5,
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  callbox: {
    width: 100,
    // padding: 25,
  },
});
