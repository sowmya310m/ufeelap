import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, ImageBackground, TextInput,Alert } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Panel from './Panel';



import cloud from '../assets/images/journalmainicon.png';
import cloud1 from '../assets/images/journalicon1.png';
import cloud2 from '../assets/images/journalicon2.png';

import { MonoText } from '../components/StyledText';

let promptHeading = ['FreeWrite','When times get tough I would like to remember','FreeWrite','When times get tough I would like to remember'];

  

class JournalScreen2 extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonPressed() {
    alert("Shows mobile's Contacts");
  }
 


  render() {
    const textVal = this.props.textValue;
    function ToughtsCardComponent(props) {
        return (
            <View style={styles.cardSize}>
       <Card style={styles.cardSize} >
    <Text style={styles.cardTextStyle}>{props.textValue}</Text>
    <TextInput style={styles.textBoxStyle}/>
    <TouchableOpacity  activeOpacity = { .5 } style={styles.buttonStyle} onPress={props.buttonPress}>
               <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableOpacity>
      </Card>
   </View>  
        );
      }
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
     <View>
     
    <Text style={styles.mainTextStyle}>Journal2</Text>
    </View>
    <ScrollView verrtical={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.finalrow}>
        <ToughtsCardComponent textValue={textVal} buttonPress={this.buttonPressed}/>
        <Text style={styles.smallTextStyle}>choose a different prompt</Text>
    </View>
    </ScrollView>
    </ScrollView>
  );
}
}

export default JournalScreen2;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
   
  },

  image: {
    height:190,
    width:150,
  },
  cardTextStyle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color:'#2D709E',
  },
  smallTextStyle:{
    color: 'white',
    marginLeft: 12,
    textDecorationLine: 'underline',
    
  },
  buttonStyle: {
      width:150,
      height:40,
      marginLeft:70,
     
      borderRadius:10,
      backgroundColor:'#5DBAE4',
      alignItems:"center",

     

  },
  buttonTextStyle: {
    fontStyle: 'normal',
    fontSize: 18,
    color:'#FFFFFF',
    marginTop:8,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    color: 'blue',
  },
  textBoxStyle: {
    width:250,
    height: 300, 
    borderRadius:10,
    borderColor: 'gray', 
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    marginLeft:15,
    },

  mainTextStyle:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 10,
    color: 'white',
  },
  finalrow: {
    flexDirection: 'column',
    margin: 10,
    alignItems:"center",
   
  },
  cardSize : {
    width:300,
    height:450,
    borderRadius:10,
    marginBottom:20,
    padding: 10,
    marginRight: 18,
    
    justifyContent: 'space-around',
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
