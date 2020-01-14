import React, { useEffect } from 'react';
const MapFilters = ({onChangeFilter}) => {
    const [fltBatteryPercentage, setFltBatteryPercentage] = React.useState(97);
    const [fltStatus, setFltStatus] = React.useState(0);
    const [fltCarparks, setFltCarparks] = React.useState(false);
    const [fltPOI, setFltPOI] = React.useState(false);
    const [fltCity, setFltCity] = React.useState('wroclaw');

    useEffect(() => {
        // console.log(`[CarFlt] Status: ${fltStatus}, Battery: ${fltBatteryPercentage}%`);
        onChangeFilter({batteryPercentage: fltBatteryPercentage, status: fltStatus, poi: fltPOI, carparks: fltCarparks, city: fltCity})
    }, [fltStatus, fltBatteryPercentage, fltPOI, fltCarparks, fltCity, onChangeFilter]);

    const setFltBattery = (val) => {
        const max = 100, min = 0,
            newVal = fltBatteryPercentage + val;
        if (newVal >= min && newVal <= max) {
            setFltBatteryPercentage(newVal);
        }
    }
    const onBatteryRangeChange = (e) => {
        const range = e.target.value;
        setFltBatteryPercentage(range);
    }

    const handlePoiChange = (e) => {
        setFltPOI(e.target.checked);
    }

    const handleCarparksChange = (e) => {
        setFltCarparks(e.target.checked);
    }

    const changeFltStatus = (e) => {
        setFltStatus(e.target.value);
    }

    const changeFltCity = (e) => {
        setFltCity(e.target.value);
    }

    return (
        <div className="map-filter">
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <h4 className="mt-3">Ustawienia</h4>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputGroupSelect02">Miasto</label>
                        <select className="custom-select" id="inputGroupSelect02" onChange={changeFltCity} value={fltCity}>
                            <option value="wroclaw">Wrocław</option>
                            <option value="warszawa">Warszawa</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <label>Bateria w samochodach w %</label>
                        <div className="input-group">
                            <div className="form-control">{fltBatteryPercentage}</div>
                            <div className="input-group-append">
                                <span className="input-group-text">%</span>
                                <button className="btn btn-outline-secondary" onClick={() => setFltBattery(+1)} type="button">+ 1</button>
                                <button className="btn btn-outline-secondary" onClick={() => setFltBattery(-1)} type="button">- 1</button>
                            </div>
                            <input type="range" className="custom-range" onChange={onBatteryRangeChange} defaultValue={fltBatteryPercentage} min="0" max="100" step="1" id="customRange3"></input>
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputGroupSelect01">Dostępność samochodów</label>
                        <select className="custom-select" id="inputGroupSelect01" onChange={changeFltStatus} value={fltStatus}>
                            <option value="AVAILABLE">Dostępne</option>
                            <option value="UNAVAILABLE">Niedostepne</option>
                            <option value="0">Wszystkie</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <div className="custom-control custom-switch">
                            <input className="custom-control-input" onChange={e => handlePoiChange(e)} type="checkbox" id="poiCheck" />
                            <label className="custom-control-label" htmlFor="poiCheck">
                                Pokaż: Miejsca POI
                            </label>
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <div className="custom-control custom-switch">
                            <input className="custom-control-input" onChange={e => handleCarparksChange(e)} type="checkbox" id="carparksCheck" />
                            <label className="custom-control-label" htmlFor="carparksCheck">
                                Pokaż: Parkingi
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapFilters;