import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import DrawerNavigation from './DrawerNavigation';
import UserIcon from 'react-native-vector-icons/Entypo';
import AdminIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="User">
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <UserIcon name="user" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Admin-Panel"
        component={DrawerNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AdminIcon
              name="admin-panel-settings"
              color={'black'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
