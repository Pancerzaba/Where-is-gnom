import { Platform } from "react-native";
import gnoms from "../store/reducers/gnoms";

class Gnom{
    constructor(id, ownerId, title, imageURL ){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.imageURL=imageURL
        
    }
}
export default Gnom