import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../screen/StartScreen';
import GnomScreen from '../screen/GnomScreen';
import SearchScreen from '../screen/SearchScreen';
import GalleryScreen from '../screen/GalleryScreen';


 
const GnomsNavigator=createStackNavigator({
    Start: StartScreen,
    Search: { screen: SearchScreen},
    Gallery: GalleryScreen,
    Gnom: GnomScreen
});
export default  createAppContainer (GnomsNavigator)