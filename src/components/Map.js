import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Car from '../models/Car';
import POIpoint from '../models/POIpoint';
import Carpark from '../models/Carpark';

const Map = (props) => {
    const _map = useRef(0);
    const _markers = useRef(0);
    const _markersPOI = useRef(0);
    const _markersCarpark = useRef(0);
    useEffect(() => {
        _map.current = L.map('map', {
            center: [49.8419, 24.0315],
            zoom: 16,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        })
        _markers.current        = L.layerGroup().addTo(_map.current);
        _markersPOI.current     = L.layerGroup().addTo(_map.current);
        _markersCarpark.current = L.layerGroup().addTo(_map.current);
    }, []);

    useEffect(() =>{
        if(props.carParkPoints){
            let getIcon = () => {
                let statusFolder = 'warning';
                let iconName = 'parking-meter-export.png';
                return L.icon({
                    iconUrl: 'icons/map/' + statusFolder + '/' + iconName,
                    iconSize:     [32, 37], 
                    popupAnchor:  [0, -16]
                });
            }

            /**
             * @param {Carpark} point - Carpark Object
             */
            let formatPopup = (point) => {
                return `Nazwa: ${point.name} <br />Miejsc:${point.spacesCount} <br />GPS: [${point.location.latitude}, ${point.location.longitude}]<br />`;
            }
            _markersCarpark.current.clearLayers();
            props.carParkPoints.forEach((el, idx, arr) => {
                const point = new Carpark(el);
                let marker = L.marker([point.location.latitude, point.location.longitude], {icon: getIcon() })
                .bindPopup(formatPopup(point));
                _markersCarpark.current.addLayer(marker);
            })
        } else {
            _markersCarpark.current.clearLayers();
        }

    },[props.carParkPoints])

    useEffect(() =>{
        if(props.POIpoints){
            
            let getIcon = (category) => {
                let statusFolder = 'primary';
                let categoryIcon = 'caution.png';
                //parking-meter-export.png
                switch (category) {
                    case 'Stacje kolejowe':
                        categoryIcon = 'train.png';
                        break;
                    case 'Krasnale':
                        categoryIcon = 'flagman.png';
                        break;
                    default:
                        categoryIcon = 'caution.png';
                }            
                return L.icon({
                    iconUrl: 'icons/map/' + statusFolder + '/' + categoryIcon,
                    iconSize:     [32, 37], // size of the icon
                    popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
                });
            }

            /**
             * @param {POIpoint} point - Car Object
             */
            let formatPopup = (point) => {
                return `Nazwa: ${point.name} <br />Typ:${point.category} <br />GPS: [${point.location.latitude}, ${point.location.longitude}]<br />`;
            }
            _markersPOI.current.clearLayers();
            props.POIpoints.forEach((el, idx, arr) => {
                const point = new POIpoint(el);
                let marker = L.marker([point.location.latitude, point.location.longitude], {icon: getIcon(point.category) })
                .bindPopup(formatPopup(point));
                _markersPOI.current.addLayer(marker);
            })
        } else {
            _markersPOI.current.clearLayers();
        }

    },[props.POIpoints])

    useEffect(() => {

        // let bounds = [
        //     [52.1857427154, 21.0467766482],
        //     [52.187511, 20.930528],
        //     [52.270895221, 21.0117310234],
        // ];
        let bounds = [
            [51.0662468064, 16.9946984927],
            [51.0874242353, 17.0895922616],
            [51.1548934591, 17.0168069707],
        ];
        _map.current.fitBounds(bounds);
        // _map.current.markerClusterGroup();

        let getIcon = (status, carType) => {
            let statusFolder = (status === 'AVAILABLE') ? 'success' : 'danger';
            let iconName = (carType === 'TRUCK') ? 'truck3.png' : 'car.png';
            return L.icon({
                iconUrl: 'icons/map/' + statusFolder + '/' + iconName,
                iconSize:     [32, 37], // size of the icon
                popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
            });
        }

        /**
         * @param {Car} car - Car Object
         */
        let formatPopup = (car) => {
            return `Typ:${car.type} ${car.platesNumber} <br />Bateria: ${car.batteryLevelPct}<br /> Status: ${car.status} <br />GPS: [${car.location.latitude}, ${car.location.longitude}]<br />`;
        }
        _markers.current.clearLayers();
        props.points.forEach((el, idx, arr) => {
            const car = new Car(el);
            let marker = L.marker([car.location.latitude, car.location.longitude], {icon: getIcon(car.status, car.type) })
            .bindPopup(formatPopup(car));
            _markers.current.addLayer(marker);
        })

    },[props.points]);

    // useEffect(() => {

    //     /**
    //      * @param {Car} car - Car Object
    //      */
    //     // let bounds = props.points.map(function (car) {
    //     //     return [car.location.latitude, car.location.longitude];
    //     // });
    //     let bounds = [
    //         [52.1857427154, 21.0467766482],
    //         [52.187511, 20.930528],
    //         [52.270895221, 21.0117310234],
    //     ];
            
    //     // create map
    //     let carsMap = L.map('map', {
    //         center: [49.8419, 24.0315],
    //         zoom: 16,
    //         layers: [
    //             L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //                 attribution:
    //                 '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //             }),
    //         ]
    //     })
    //     carsMap.fitBounds(bounds);

        
    //     let getIcon = (status, carType) => {
    //         let statusFolder = (status === 'AVAILABLE') ? 'primary' : 'warning';
    //         let iconName = (carType === 'TRUCK') ? 'truck3.png' : 'car.png';
    //         return L.icon({
    //             iconUrl: 'icons/map/' + statusFolder + '/' + iconName,
    //             iconSize:     [32, 37], // size of the icon
    //             popupAnchor:  [0, -16] // point from which the popup should open relative to the iconAnchor
    //         });
    //     }

    //     /**
    //      * @param {Car} car - Car Object
    //      */
    //     let formatPopup = (car) => {
    //         return `Typ:${car.type} ${car.platesNumber} <br />Bateria: ${car.batteryLevelPct}<br /> Status: ${car.status} <br />GPS: [${car.location.latitude}, ${car.location.longitude}]<br />`;
    //     }
    //     console.log(typeof carsMap);
    //     props.points.forEach((el, idx, arr) => {
    //         const car = new Car(el);
            
    //         L.marker([car.location.latitude, car.location.longitude], {icon: getIcon(car.status, car.type) })
    //          .addTo(carsMap)
    //          .bindPopup(formatPopup(car));
    //     })
        
    // }, [props.points]);

    return <div id="map"></div>
}

export default Map;