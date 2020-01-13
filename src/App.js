import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import Map from "./components/Map";
import MapFilters from "./components/MapFilters";
// import MyProvider from "./components/MyProvider";
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  const _POI = useRef(0);
  const _carparks = useRef(0);

  const [cars, setCars] = useState();
  const [fCars, setFCars] = useState();
  const [filter, setFilter] = useState({batteryPercentage: false, status: 0});
  const [POI, setPOI] = useState();
  const [fPOI, setFPOI] = useState();
  const [carparks, setCarparks] = useState();
  const [fCarparks, setFCarparks] = useState();
  
  // useEffect(() => {
  //   console.log(fCars)
  //   // setFilteredCars(cars);
  // }, [fCars]);

  useEffect(() => {
    // console.log(`[Global] Status: ${filter.status}, Battery: ${filter.batteryPercentage}%`);
    console.log(filter);
    let filteredCars = cars;

    // Filter by BATTERY PERCENTAGE
    if(filter.batteryPercentage !== false && cars){
      filteredCars = filteredCars.filter(
        /** @param {Car} car - Car Object */
        function(car){
          return car.batteryLevelPct >= filter.batteryPercentage
      });
    }

    // Filter by STATUS
    if(filter.status && filter.status !== '0' && cars){
      filteredCars = filteredCars.filter(
        /** @param {Car} car - Car Object */
        function(car){
          let PATTERN = new RegExp('^'+filter.status+'$');
          return PATTERN.test(car.status);
      });
    }

    if(!filter.carparks){
      setFCarparks(false);
    } else {
      setFCarparks( carparks );
    }

    if(!filter.poi){
      setFPOI(false);
    } else {
      setFPOI( POI );
    }
    
    if(filteredCars){
      setFCars(filteredCars);
    }

  }, [filter]);

  useEffect(() => {
    let carsEndpoint = (process.env.NODE_ENV === 'development') ? 'mockup-data/map-cars.json' : 'https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE';
    let carparksEndpoint = (process.env.NODE_ENV === 'development') ? 'mockup-data/map-carparks.json' : 'https://dev.vozilla.pl/api-client-portal/map?objectType=PARKING';
    let poiEndpoint = (process.env.NODE_ENV === 'development') ? 'mockup-data/map-poi.json' : 'https://dev.vozilla.pl/api-client-portal/map?objectType=POI';
    axios.get( carsEndpoint ).then(({ data }) => {  setFCars(data.objects); setCars(data.objects); });
    axios.get( poiEndpoint ).then(({ data }) => {  setFPOI(data.objects); setPOI(data.objects); });
    axios.get( carparksEndpoint ).then(({ data }) => {  setFCarparks(data.objects); setCarparks(data.objects); });
  }, []);

  return cars ? (
    <div className="container mt-3">
      <MapFilters onChangeFilter={setFilter}/>
      <Map points={fCars} carParkPoints={fCarparks} POIpoints={fPOI} mapFilter={filter}/>
    </div>
  ) : (
      <div>Loading...</div>
  );
}

export default App;
