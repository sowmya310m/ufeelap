import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
//import { Card, CardItem } from 'react-native-elements';
import {Card, CardItem, Body, Button } from 'native-base';



import { MonoText } from '../components/StyledText';

export default function HomeScreen() {

  const helplines = ['campus Safty', 'Ulifeline', 'Trevor Project'];
  return (

    <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View  style={styles.cardSize}>
      { helplines.map((txt)=>{
        return (
         <SmallCardComponent text={txt}/>
        );
      })
    }
    </View>
  </ScrollView>
    
    );
  }
  function SmallCardComponent({text}) {
    return (
    <View>
      <View>
       <Card style={styles.cardSize}> 
          <Text style={styles.cardTextStyle}>{text}</Text>
            <Button style={styles.callbox}>
            <Image 
            style={styles.phoneimg}
            source= {require('../assets/images/phone-image.png')}/>
          </Button>
        </Card>
      </View>
   </View>
    );
  }



function OptionButton({ icon, label, onPress, isLastOption }) {
    return (
      <RectButton style={[styles.option, isLastOption && styles.lastOption]} type='Text' onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{label}</Text>
          </View>
        </View>
      </RectButton>
    );
  }

 function CardComponent() {
   return (
    <Card>
    <CardItem header button onPress={() => alert("This is Card Header")}>
      <Text>NativeBase</Text>
    </CardItem>
    <CardItem button onPress={() => alert("This is Card Body")}>
      <Body>
        <Text>
          Click on any carditem
        </Text>
      </Body>
    </CardItem>
    <CardItem footer button onPress={() => alert("This is Card Footer")}>
      <Text>GeekyAnts</Text>
    </CardItem>
  </Card>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
    //backgroundColor: linear-gradient('180deg', '#0F3258', '0','#2D709E', '100',)
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
  cardSize : {
    width:150,
    height:150,
    borderRadius:10,
    flexDirection:'row',
    
  },
  callbox: {
    width: 100,
    padding: 25,
    marginRight: 50,
    marginTop: 50,
  },
cardTextStyle: {
//fontFamily: 'sans-serif',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: 18,
lineHeight: 22,
textAlign: 'center',

},
});
