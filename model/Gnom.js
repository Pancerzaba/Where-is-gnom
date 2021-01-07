import { Platform } from "react-native";


 class Gnom{
    constructor(id, ownerId, title, imageURL , adress, description){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.imageURL=imageURL;
        this.adress =adress;
        this.description=description;
        
    }
}
export  default Gnom;