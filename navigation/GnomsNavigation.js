import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "../screen/StartScreen";
import GnomScreen from "../screen/GnomScreen";
import SearchScreen from "../screen/SearchScreen";
import GalleryScreen from "../screen/GalleryScreen";
import NawigateScreen from "../screen/NawigateScreen";
import LoginScreen from "../screen/LoginScreen";

const GnomsNavigator = createStackNavigator({
  Login: LoginScreen,
  Start: StartScreen,
  Search: SearchScreen,
  Gallery: GalleryScreen,
  Gnom: GnomScreen,
  Nawiguj: NawigateScreen,
});
export default createAppContainer(GnomsNavigator);
