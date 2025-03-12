import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import AllTender from '../screens/AllTender';
import LatestTender from '../screens/LatestTenter';
import TenderList from '../components/TenderList';
import CreateTender from '../components/CreateTender';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="User">
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Tender List" component={TenderList} />
      <Tab.Screen name="Latest" component={CreateTender} />
      <Tab.Screen name="Drawer" component={'ProfileScreen'} />
    </Tab.Navigator>
  );
}
export default BottomTab;
