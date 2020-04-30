import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, ImageBackground, TextInput } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Panel from './Panel';



import cloud from '../assets/images/journalmainicon.png';


import { MonoText } from '../components/StyledText';
import JournalScreen2 from './JournalScreen2';

let promptHeading = ['FreeWrite','Right now my greatest challenge is...',
'Positives of today were... Negatives about today were...',
'When times get tough I would like to remember',
'Write a love letter to yourself...',
'On a scale of 1-10 my mental health is at a _____ because...',
'Who has been your biggest supporter? Write that person a thank you letter...',
'A fear I would like to overcome is... I can do these things to start overcoming it...',
'Name ten things you can start doing to take care of yourself.'];




class JournalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
             nextPage: false,
             promptText: null,
        };
  }
  MovetoNextPage = (text)=>{
    this.setState({
      nextPage: true,
      promptText: text,
    });
  }
  PromptsCardComponent(textvalue) {
    return(
    <View style={styles.cardSize}>
       <Card style={styles.cardSize} >
    <Text style={styles.cardTextStyle} onPress={() => this.MovetoNextPage(textvalue)}>{textvalue}</Text>
      </Card>
   </View>
    );
   

  }
 


  render() {
    
    const {nextPage,promptText}=this.state;
    let componentTobeRendered;
    console.log(nextPage);
    if(nextPage){
      componentTobeRendered=<JournalScreen2 textValue={promptText}/>
    }
    if(!nextPage){
      componentTobeRendered= 
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View>
     <Text style={styles.mainTextStyle}>Journal</Text>
     </View>
     <ScrollView verrtical={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
     <View style={styles.finalrow}>
     {promptHeading.map((text) => {return(this.PromptsCardComponent(text))})}
     </View>
     </ScrollView>
     </ScrollView>
    }
    return (
      
    <View style={styles.container}>
    {componentTobeRendered}
    </View>
    
  );
}

}

export default JournalScreen;

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
  text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    color: 'blue',
  },
  textBoxStyle: {
    height: 150, 
    borderRadius:10,
    borderColor: 'gray', 
    borderWidth: 1,
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
    height:80,
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
