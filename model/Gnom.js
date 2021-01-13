import { Platform } from "react-native";


 class Gnom{
    constructor(id, ownerId, title, imageURL , adress, description, lat, lng){
        this.id=id;
        this.ownerId=ownerId;
        this.title=title;
        this.imageURL=imageURL;
        this.adress =adress;
        this.description=description;
        this.lat=lat
        this.lng= lng;
        
    }
}
export  default Gnom;