class POIpoint {
    discriminator;
    id;
    name;
    description;
    location;
    // location = {
    //     latitude,
    //     longitude,
    // };
    metadata;
    address;
    // address = {
    //     street,
    //     house,
    //     city,
    // };
    category;
    picture;
    color;
    // color = {
    //     rgb,
    //     alpha,
    // };

    constructor(data){
        Object.assign(this, data);
    }
}
export default POIpoint;