class Car {
    discriminator;
    platesNumber;        
    sideNumber;
    color;
    type;
    picture;
    // picture = {
    //     id,
    //     name,
    //     extension,
    //     contentType,
    // };
    rangeKm;
    batteryLevelPct;
    reservationEnd;
    reservation;
    status;
    locationDescription;
    address;
    mapColor;
    // mapColor = {
    //     rgb,
    //     alpha,
    // };
    promotion;
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
export default Car;