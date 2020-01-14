class Carpark {
    constructor(data){
        this.discriminator         = data.discriminator;
        // this.address             = {
        //     street : data.address.street,
        //     house  : data.address.house,
        //     city   : data.address.city,
        // };
        this.spacesCount          = data.spacesCount;        
        this.availableSpacesCount = data.availableSpacesCount;
        // this.chargers               = data.chargers;
        this.color                = {
            rgb   : data.color.rgb,
            alpha : data.color.alpha,
        };
        this.pictureId            = data.pictureId;
        this.id                   = data.id;
        this.name                 = data.name;
        this.description          = data.description;
        this.location             = {
            latitude  : data.location.latitude,
            longitude : data.location.longitude,
        };
        this.metadata             = data.metadata;
    }
}
export default Carpark;