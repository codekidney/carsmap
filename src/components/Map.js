import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Car from '../models/Car';
import POIpoint from '../models/POIpoint';
import Carpark from '../models/Carpark';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const Map = (props) => {
    const _map = useRef(0);
    const _markers = useRef(0);
    const _markersPOI = useRef(0);
    const _markersCarpark = useRef(0);
    const _map_bounds = useRef(false);
    const _map_city = useRef(false);
    useEffect(() => {
        _map.current = L.map('map', {
            center: [51.1089776,17.0326689],
            zoom: 10,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                    '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        })
        const clusterOptions = {
            disableClusteringAtZoom: 12
        }
        _markers.current        = L.markerClusterGroup(clusterOptions).addTo(_map.current);
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
                    iconSize:     [32, 37], 
                    popupAnchor:  [0, -16]
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

        if(!_map_bounds.current){
            _map_bounds.current = props.points.map(function (car) {
                return [car.location.latitude, car.location.longitude];
            });
            _map.current.fitBounds(_map_bounds.current);
        }
        if(props.centerOncity){
            if(_map_city.current !== props.centerOncity){

                if(props.centerOncity === 'warszawa'){
                    _map.current.panTo([52.2319237,21.0067265]);
                    _map.current.setZoom(11);
                    _map_city.current = 'warszawa';
                } else {
                    // wroclaw
                    _map.current.panTo([51.1089776,17.0326689]);
                    _map.current.setZoom(11);
                    _map_city.current = 'wroclaw';
                }
            }
        }

        let getIcon = (status, carType) => {
            let statusFolder = (status === 'AVAILABLE') ? 'success' : 'danger';
            let iconName = (carType === 'TRUCK') ? 'truck3.png' : 'car.png';
            return L.icon({
                iconUrl: 'icons/map/' + statusFolder + '/' + iconName,
                iconSize:     [32, 37], 
                popupAnchor:  [0, -16]
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

    },[props.points, props.centerOncity]);

    return <div id="map"></div>

}

export default Map;