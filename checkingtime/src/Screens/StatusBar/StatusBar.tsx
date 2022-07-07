import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../HomeScreen';
import Jobs from '../Jobs';


const Tab = createMaterialBottomTabNavigator();

const StatusBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={Jobs} />
    </Tab.Navigator>
  );
};
export default StatusBar;