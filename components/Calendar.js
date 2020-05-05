import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, DatePickerIOS } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';
import {Card, CardItem, Body, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  buttonValue: state.feelingReducer.buttonValue,
  imageValue: state.feelingReducer.imageValue,
});

const mapDispatchToProps = dispatch => ({

});


 class CalendarComponent extends React.Component {

 constructor(props){
   super(props)
   var date = new Date().getDate(); //Current Date
   var month = new Date().getMonth() + 1; //Current Month
   var year = new Date().getFullYear(); //Current Ye
   this.state = {date: year + '-' + month + '-' + date}
 }

 render(){
   const { imageValue, buttonValue } = this.props;
   return (
     <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.contentContainer}>
      <View >
       <Text style={styles.mainTextStyle}>Calendar</Text>
      </View>
      <View style={styles.calendarStyle}>
        <DatePicker
         style={{width: 300 }}
         date={this.state.date}
         mode="date"
         placeholder="select date"
         format="YYYY-MM-DD"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={{
           dateIcon: {
             position: 'absolute',
             left: -10,
             top: 4,
             marginLeft: 0
           },
           dateInput: {
             marginLeft: 36,
           },
           dateText: {
             color: 'white',
             fontWeight: 'bold',
             fontSize: 30

           },
           // ... You can check the source to find the other keys.
         }}
         onDateChange={(date) => {this.setState({date: date})}}
       />
      </View>
      <View  style={styles.previousPage}>
        <Image source={imageValue} style = {styles.feelingImg}/>
      </View>
      <View>
        <Text style={styles.previousText}> {buttonValue} </Text>
      </View>
      </View>
     </ScrollView>
   )
 }
}




export default connect(mapStateToProps, mapDispatchToProps) (CalendarComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D709E',
  },
  mainTextStyle:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 20,
    marginLeft: 10,
    color: 'white',
  },
  calendarStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 25,
    padding:16
  },
  finalrow: {
    flexDirection: 'column',
    marginTop: 25,
    marginBottom: 20,
  },
  allContactsTextStyle:{
      color: 'white',
      marginLeft: 160,
      textDecorationLine: 'underline',
  },
  cardSize : {
    borderRadius:10,
    padding: 10,
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
    padding: 10,
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
  feelingImg: {
    width: 200,
    height: 120,
    resizeMode: 'center',
    marginTop: 50,
    marginLeft: 50,
  },
  previousPage: {
    marginTop: -40,
  },
  previousText: {
    marginTop: -70,
    marginLeft: 200,
    fontSize: 20,
    color: 'white',
  }
});
