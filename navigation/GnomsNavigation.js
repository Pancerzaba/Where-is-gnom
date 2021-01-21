import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../screen/StartScreen';
import GnomScreen from '../screen/GnomScreen';
import SearchScreen from '../screen/SearchScreen';
import GalleryScreen from '../screen/GalleryScreen';
import NawigateScreen from '../screen/NawigateScreen'


 
const GnomsNavigator=createStackNavigator({
    Start: StartScreen,
    Search:  SearchScreen,
    Gallery: GalleryScreen,
    Gnom: GnomScreen,
    Nawiguj: NawigateScreen
});
export default  createAppContainer (GnomsNavigator)