import {createDrawerNavigator} from '@react-navigation/drawer';
import TenderList from '../components/TenderList';
import CreateTender from '../components/CreateTender';
import Profile from '../components/Profile';
import ViewTenders from '../components/ViewTenders';
import Offers from '../components/Offers';
import Plans from '../components/Plans';
import Help from '../components/Help';
import Logout from '../components/Logout';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="CreateTender">
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="CreateTender" component={CreateTender} />
      <Drawer.Screen name="TenderList" component={TenderList} />
      <Drawer.Screen name="ViewTenders" component={ViewTenders} />
      <Drawer.Screen name="Offers" component={Offers} />
      <Drawer.Screen name="Plans" component={Plans} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
