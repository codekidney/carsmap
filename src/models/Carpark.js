class Carpark {
    discriminator;
    address;
    // this.address = {
    //     street,
    //     house,
    //     city,
    // };
    spacesCount;        
    availableSpacesCount;
    chargers;
    color;
    // color = {
    //     rgb,
    //     alpha,
    // };
    pictureId;
    id;
    name;
    description;
    location;
    // location = {
    //     latitude,
    //     longitude,
    // };
    metadata;
    
    constructor(data){
        Object.assign(this, data);
    }
}
export default Carpark;