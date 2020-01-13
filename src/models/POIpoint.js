class POIpoint {
    constructor(data){
        this.discriminator       = data.discriminator;
        this.id                  = data.id;
        this.name                = data.name;
        this.description         = data.description;
        this.location            = {
            latitude  : data.location.latitude,
            longitude : data.location.longitude,
        };
        this.metadata            = data.metadata;
        
        // this.address             = {
        //     street : data.address.street,
        //     house  : data.address.house,
        //     city   : data.address.city,
        // };
        this.category            = data.category;
        this.picture             = data.picture;
        this.color               = {
            rgb   : data.color.rgb,
            alpha : data.color.alpha,
        };
    }
}
export default POIpoint;