class Car {
    constructor(data){
        this.discriminator       = data.discriminator;
        this.platesNumber        = data.platesNumber;        
        this.sideNumber          = data.sideNumber;
        this.color               = data.color;
        this.type                = data.type;
        this.picture             = {
            id          : data.picture.id,
            name        : data.picture.name,
            extension   : data.picture.extension,
            contentType : data.picture.contentType,
        };
        this.rangeKm             = data.rangeKm;
        this.batteryLevelPct     = data.batteryLevelPct;
        this.reservationEnd      = data.reservationEnd;
        this.reservation         = data.reservation;
        this.status              = data.status;
        this.locationDescription = data.locationDescription;
        this.address             = data.address;
        this.mapColor            = {
            rgb   : data.mapColor.rgb,
            alpha : data.mapColor.alpha,
        };
        this.promotion           = data.promotion;
        this.id                  = data.id;
        this.name                = data.name;
        this.description         = data.description;
        this.location            = {
            latitude  : data.location.latitude,
            longitude : data.location.longitude,
        };
        this.metadata            = data.metadata;
    }
}
export default Car;