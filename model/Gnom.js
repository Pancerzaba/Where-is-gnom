import { Platform } from "react-native";
import gnom from "../store/reducers/Gnom";

class Gnom{
    constructor(id, ownerId, title, imageURL ){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.imageURL=imageURL
        
    }
}
export default Gnom