import {createDrawerNavigator} from '@react-navigation/drawer';
import TenderList from '../components/TenderList';
import CreateTender from '../components/CreateTender';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CreateTender" component={CreateTender} />
      <Drawer.Screen name="TenderList" component={TenderList} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
