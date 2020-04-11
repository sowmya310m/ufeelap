import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,Linking} from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Panel from './Panel';


import headspaceappicon from '../assets/images/headspaceicon.png';
import calmappicon from '../assets/images/calmappicon.png';
import moodpathicon from '../assets/images/moodpathicon.png';
import namiicon from '../assets/images/namiicon.png';
import podcasticon1 from '../assets/images/podcasticon1.jpg';
import podcasticon2 from '../assets/images/podcasticon2.png';
import podcasticon3 from '../assets/images/podcasticon3.jpg';
import youtubeicon1 from '../assets/images/youtubeicon1.png';
import youtubeicon2 from '../assets/images/youtube2.png';
import youtubeicon3 from '../assets/images/youtubeicon3.jpg';
import youtubeicon4 from '../assets/images/youtubeicon4.png';
import youtubeicon5 from '../assets/images/youtubeicon5.png';
import bookimage1 from '../assets/images/bookicon1.png';
import bookimage2 from '../assets/images/bookicon2.jpg';
import bookimage3 from '../assets/images/bookicon3.jpg';
import bookimage4 from '../assets/images/bookicon4.png';
import bookimage5 from '../assets/images/bookicon5.png';
import bookimage6 from '../assets/images/bookicon6.png';
import bookimage7 from '../assets/images/bookicon7.png';








import { MonoText } from '../components/StyledText';

let appValues = [
  {appName: 'MoodPath', appIcon: moodpathicon, 
   appDescription: 'Moodpath is the leading mental health app of emotional well-being.',
   appLink:'https://mymoodpath.com/en/'},
  {appName: 'HeadSpace', appIcon: headspaceappicon, 
   appDescription:'Meditation has been shown to help people to releive stress',
   appLink:'https://www.headspace.com/headspace-meditation-app'},
  {appName: 'Calm', appIcon: calmappicon, 
  appDescription: 'Find Your Calm Sleep more. Stress less. Live better.', 
  appLink: 'https://www.calm.com/'},
  {appName: 'Nami', appIcon: namiicon, 
  appDescription: 'National Alliance on Mental Illness', 
  appLink: 'https://www.nami.org/'},
];

let podcastValues = [
  {podcastIcon: podcasticon1, 
   podcastLink: 'https://open.spotify.com/show/0184ojF3hjFhKfktahQK4G?si=UbCvKkcJRzO1pes2MIJHhA'},
   {podcastIcon: podcasticon2, 
    podcastLink: 'https://open.spotify.com/show/464IOIGOsIUZPDV7ani1VB?si=zz-oqbDQR7urfq4lMht1BA'},
    {podcastIcon: podcasticon3, 
    podcastLink: 'https://open.spotify.com/show/2zS57s6LwstXGD9gkoKWsC?si=LRWJVGB8RoibxSQKTfTncA'},   
];

let youtubeVediosValues = [
  {vedioImage:youtubeicon1,vedioName:'Casually Suicidal',vedioDesc:'A',vedioLink:'https://www.youtube.com/watch?v=S8bJ3YlgL1Q'},
  {vedioImage:youtubeicon2,vedioName:'Connecting with friends',vedioDesc:'B',vedioLink:'https://www.youtube.com/watch?v=m-8tQ_TYLgk'},
  {vedioImage:youtubeicon3,vedioName:'Living With High Functioning Anxiety'
  ,vedioDesc:'C',vedioLink:'https://www.youtube.com/watch?v=JUedQ0_EGCQ'},
  {vedioImage:youtubeicon4,vedioName:'Just Eat More: Living with an Eating Disorder'
  ,vedioDesc:'D',vedioLink:'https://www.youtube.com/watch?v=2E4_m5dUE9s'},
  {vedioImage:youtubeicon5,vedioName:'Athletes and Mental Health'
  ,vedioDesc:'E',vedioLink:'https://www.youtube.com/watch?v=Sdk7pLpbIls'},
];

let bookValues = [
  {bookImage:bookimage2, bookLink:'https://www.urbandharma.org/pdf2/Mindfulness%20in%20Plain%20English%20Book%20Preview.pdf'},
  {bookImage:bookimage3, bookLink: 'https://www.amazon.com/Full-Catastrophe-Living-Revised-Illness/dp/0345536932'},
  {bookImage:bookimage1, bookLink: 'https://www.amazon.com/Happiness-Trap-Struggling-Start-Living/dp/1590305841'},
  {bookImage:bookimage4, bookLink:'https://www.amazon.com/Mindfulness-Acceptance-Workbook-Anxiety-Commitment/dp/1572244992'},
  {bookImage:bookimage5, bookLink:'https://www.amazon.com/Self-Compassion-Proven-Power-Being-Yourself/dp/0061733520/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='},
  {bookImage:bookimage6, bookLink:'https://www.amazon.com/Things-Might-Terribly-Horribly-Wrong/dp/1572247118'},
  {bookImage:bookimage7, bookLink:'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748'},
];

class ResourcesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  callButton = () =>
  {
    alert("Call button Clicked!!!");
  }

  SmallCardComponent(name,icon,appDes,appUrl) {
    return(
    <View>
       <Card style={styles.cardSize} >
       <Text style={styles.cardTextStyle}>{name}</Text>
       <TouchableOpacity activeOpacity = { .5 } onPress={() => Linking.openURL(appUrl)}>
          <Image source={icon} style = {styles.appIconStyle} />
        </TouchableOpacity>
    <Text style={styles.smallCardTextStyle}>{appDes}</Text>
      </Card>
   </View>
    );
  }

  youtubeCardComponent(vedioImage,vedioName,vedioDesc,vedioLink) {
    return(
    <View>
       <Card style={styles.youtubeCardComponentStyle} >
       <TouchableOpacity activeOpacity = { .5 } onPress={() => Linking.openURL(vedioLink)}>
          <Image source={vedioImage} style = {styles.youtubeVedioStyle} />
        </TouchableOpacity>
        <Text style={styles.cardTextStyle}>{vedioName}</Text>
    <Text style={styles.smallCardTextStyle}>{vedioDesc}</Text>
      </Card>
   </View>
    );
  }


  podcastComponent(podcastIcon, podcastLink) {
    return(
    <View>
      <TouchableOpacity activeOpacity = { .5 } onPress={() => Linking.openURL(podcastLink)}>
          <Image source={podcastIcon} style = {styles.youtubeVedioStyle} />
    </TouchableOpacity>
   </View>
    );
  }

  bookComponent(bookImage, bookLink) {
    return(
      <View style={styles.finalrow}>
    <TouchableOpacity activeOpacity = { .5 } onPress={() => Linking.openURL(bookLink)}>
          <Image source={bookImage} style = {styles.bookIconStyle} />
    </TouchableOpacity>
    </View>
    );
  }




  render() {
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View >
    <Text style={styles.mainTextStyle}>{'Resources'}</Text>
    <Text style={styles.smallTextStyle}>{'MobileApps'}</Text>
    </View>
    <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.finalrow}>
      {appValues.map((values) => {return(this.SmallCardComponent(values.appName,values.appIcon,values.appDescription,values.appLink))})}
   </View>
   </ScrollView>
   <Text style={styles.smallTextStyle}>{'Podcasts'}</Text>
   <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.finalrow}>
    {podcastValues.map((values) => {return(this.podcastComponent(values.podcastIcon,values.podcastLink))})}
    </View>
   </ScrollView>

   <Text style={styles.smallTextStyle}>{'Books'}</Text>
   <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.finalrow}>
    {bookValues.map((values) => {return(this.bookComponent(values.bookImage,values.bookLink))})}
    </View>
   </ScrollView>

   
   <Text style={styles.smallTextStyle}>{'Youtube'}</Text>
   
   <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <View style={styles.finalrow}>
    {youtubeVediosValues.map((values) => {return(this.youtubeCardComponent(values.vedioImage,values.vedioName,values.vedioDesc,values.vedioLink))})}
    </View>
   </ScrollView>
   </ScrollView>
  );
}

}

export default ResourcesScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
  },

 
  mainTextStyle:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    marginLeft:10,
    color: 'white',
    marginBottom:10,
  },
  smallTextStyle:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginLeft:10,
    color: 'white',
  },
  finalrow: {
    flexDirection: 'row',
    margin: 10,
  },
  cardSize : {
    width:150,
    height:240,
    borderRadius:10,
    flexDirection:'row',
    padding: 10,
    marginRight: 18,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent:'center',
  },
  youtubeCardComponentStyle : {
    width:230,
    height:200,
    borderRadius:10,
    flexDirection:'row',
    padding: 10,
    marginRight: 18,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent:'center',
  },
  cardTextStyle: {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 20,
  lineHeight: 22,
  textAlign: 'center',
},
smallCardTextStyle: {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 15,
  lineHeight: 22,
  textAlign: 'center',
},
appIconStyle: {
  marginLeft: 20,
  marginTop:20,
  marginBottom:20,
  marginRight:20,
  alignSelf: 'center',


},
bookIconStyle: {
  marginLeft: 15,
  justifyContent: 'space-around',
  alignContent:'center',
  marginRight:20,
  width:200,
  height:260,
},
podcastStyle: {
  marginLeft: 15,
  alignContent:'center',
  marginRight:10,
  width:150,
  height:200,
  borderRadius:30,
  resizeMode:'contain',
},
youtubeVedioStyle: {
  marginLeft: 5,
  alignContent:'center',
  marginRight:10,
  width:200,
  height:150,
  resizeMode:'contain'
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
