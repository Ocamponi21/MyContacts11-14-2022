import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import TabNavigator from './TabNavigator';
import AddContact from '../screens/AddContact';
import ExistingContact from '../screens/ExistingContact';
import AddGroup from '../screens/AddGroup';
import AddContactGroupsScreen from '../screens/AddContactGroup';
 

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Go To Contacts!'} component={TabNavigator}/>
        <Stack.Screen name={'Add Contact'} component={AddContact}/>
        <Stack.Screen name={'Existing Contact'} component={ExistingContact}/>
        <Stack.Screen name={'Add Group'} component={AddGroup}/>
        <Stack.Screen name={'Add Contact Group'} component={AddContactGroupsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;