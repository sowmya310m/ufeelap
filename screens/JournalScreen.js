import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Linking, ImageBackground, TextInput } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Panel from './Panel';


import cloud from '../assets/images/cloud.png';


import { MonoText } from '../components/StyledText';

let helplinesData = ['Campus Safety','Ulifeline','Trevor Project'];

class JournalScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  callButton = () =>
  {
    alert("Call button Clicked!!!");
  }

  ToughtsCardComponent(textvalue) {
    return(
    <View style={styles.cardSize}>
       <Card style={styles.cardSize} >
    <Text style={styles.cardTextStyle}>{textvalue}</Text>
       <TextInput style={styles.textBoxStyle}/>
      </Card>
   </View>
    );
  }


  render() {
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
     <View>
     <ImageBackground source={cloud} style={styles.image}>
      <Text style={styles.text}>text on image</Text>
    </ImageBackground>
    <Text style={styles.mainTextStyle}>Journal</Text>
    </View>
    <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.finalrow}>
    {helplinesData.map((values) => {return(this.ToughtsCardComponent(textvalue))})}
    </View>
    </ScrollView>
    </ScrollView>
  );
}

}

export default JournalScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
  },

  image: {
    resizeMode: "cover",
    justifyContent: "center",
    

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
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },
  finalrow: {
    flexDirection: 'row',
    margin: 10,
  },
  cardSize : {
    width:250,
    height:400,
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
