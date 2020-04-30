import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Safety from '../screens/SafetyPlan';
import Colors from '../constants/Colors';
import FirstPage from '../components/FirstPage';
import ResourcesScreen from '../screens/ResourcesScreen';
import JournalScreen from '../screens/JournalScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';


export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });


  return (
    <BottomTab.Navigator INITIAL_ROUTE_NAME = 'Home'>
      <BottomTab.Screen
        name="Safe"
        component={Safety}
        options={{
          title: 'SafetyPlan',
          tabBarIcon: ({ focused }) => <Ionicons
            name="md-heart"
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabSafetyIconSelected : Colors.tabIconDefault}
          />,
        }}
      />
      <BottomTab.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-wifi" />,
        }}
      />

      <BottomTab.Screen
        name="Hotline"
        component={HomeScreen}
        options={{
          title: 'Hotline',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarComponent}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-calendar" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={FirstPage}
        options={{
          title: 'Journal',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cloud-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Main"
        component={JournalScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
//
//   switch (routeName) {
//     case 'Home':
//       return '';
//     case 'Links':
//       return 'Settings';
//     case 'Safe':
//       return '';
//   }
// }
