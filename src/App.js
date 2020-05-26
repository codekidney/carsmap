import React, { useState, useEffect } from 'react';
import axios from "axios";
import Map from "./components/Map";
import MapFilters from "./components/MapFilters";
// import MyProvider from "./components/MyProvider";
import './App.css';
import './assets/Layout.css';
import './assets/BtnToggle.css';
import './assets/bootswatch/cyborg/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './assets/LeafletCluster.css';

function App() {
    const [cars, setCars] = useState();
    const [fCars, setFCars] = useState();
    const [filter, setFilter] = useState({ batteryPercentage: false, status: 0, carparks: false, poi: false, city: 'wroclaw' });
    const [POI, setPOI] = useState();
    const [fPOI, setFPOI] = useState();
    const [carparks, setCarparks] = useState();
    const [fCarparks, setFCarparks] = useState();
    const [sidebarClass, setSidebarClass] = useState('open');

    useEffect(() => {
        let filteredCars = cars;

        // Filter by BATTERY PERCENTAGE
        if (filter.batteryPercentage !== false && cars) {
            filteredCars = filteredCars.filter(
                /** @param {Car} car - Car Object */
                function (car) {
                    return car.batteryLevelPct >= filter.batteryPercentage
                });
        }

        // Filter by STATUS
        if (filter.status && filter.status !== '0' && cars) {
            filteredCars = filteredCars.filter(
                /** @param {Car} car - Car Object */
                function (car) {
                    let PATTERN = new RegExp('^' + filter.status + '$');
                    return PATTERN.test(car.status);
                });
        }

        // Carparks points switch
        setFCarparks( (!filter.carparks) ? false : carparks );
        
        // POI points switch
        setFPOI( (!filter.poi) ? false : POI );

        if (filteredCars) {
            setFCars(filteredCars);
        }

    }, [filter, POI, carparks, cars]);

    useEffect(() => {
        let carsEndpoint = (process.env.NODE_ENV === 'development') ? 'mockup-data/map-cars.json' : 'https://kamilnowak.com/github/carsmap/mockup-data/api.php?data=cars';
        let carparksEndpoint = (process.env.NODE_ENV === 'development') ? 'mockup-data/map-carparks.json' : 'https://kamilnowak.com/github/carsmap/mockup-data/api.php?data=carparks';
        let poiEndpoint = (process.env.NODE_ENV === 'development') ? 'mockup-data/map-poi.json' : 'https://kamilnowak.com/github/carsmap/mockup-data/api.php?data=poi';
        axios.get(carsEndpoint).then(({ data }) => { setFCars(data.objects); setCars(data.objects); });
        axios.get(poiEndpoint).then(({ data }) => { setFPOI(data.objects); setPOI(data.objects); });
        axios.get(carparksEndpoint).then(({ data }) => { setFCarparks(data.objects); setCarparks(data.objects); });
    }, []);

    const toggleSidebar = (e) => {
        e.preventDefault();
        if (sidebarClass === ''){
            setSidebarClass('open')
        } else {
            setSidebarClass('')
        }
    }

    return cars ? (
        <div className="layout">
            <div className={'layout-sidebar '+sidebarClass}>
                <div className={'menu-left-part '+sidebarClass}>
                    <MapFilters onChangeFilter={setFilter} />
                </div>
                <div className="menu-right-part">
                    <div className="toggle-holder">
                        <div id="toggle" className={sidebarClass} onClick={toggleSidebar}><div className="menu-line"></div></div>
                    </div>
                </div>
            </div>
            <div className={'layout-content '+sidebarClass}>
                <Map points={fCars} centerOncity={filter.city} carParkPoints={fCarparks} POIpoints={fPOI} mapFilter={filter} />
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default App;
