import React, { useEffect } from 'react';
const MapFilters = (props) => {
    const [fltBatteryPercentage, setFltBatteryPercentage] = React.useState(97);
    const [fltStatus, setFltStatus] = React.useState(0);
    const [fltCarparks, setFltCarparks] = React.useState(false);
    const [fltPOI, setFltPOI] = React.useState(false);
    useEffect(() => {
        // console.log(`[CarFlt] Status: ${fltStatus}, Battery: ${fltBatteryPercentage}%`);
        props.onChangeFilter({batteryPercentage: fltBatteryPercentage, status: fltStatus, poi: fltPOI, carparks: fltCarparks})
    }, [fltStatus, fltBatteryPercentage, fltPOI, fltCarparks]);

    const setFltBattery = (val) => {
        const max = 100, min = 0,
            newVal = fltBatteryPercentage + val;
        if (newVal >= min && newVal <= max) {
            setFltBatteryPercentage(newVal);
        }
    }

    const handlePoiChange = (e) => {
        setFltPOI(e.target.checked);
    }

    const handleCarparksChange = (e) => {
        setFltCarparks(e.target.checked);
    }

    let changeFltStatus = (e) => {
        setFltStatus(e.target.value);
    }

    return (
        <div className="map-filter">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Bateria</span>
                        </div>
                        <div className="form-control">{fltBatteryPercentage}</div>
                        <div className="input-group-append">
                            <span className="input-group-text">%</span>
                            <button className="btn btn-outline-secondary" onClick={() => setFltBattery(+1)} type="button">+</button>
                            <button className="btn btn-outline-secondary" onClick={() => setFltBattery(-1)} type="button">-</button>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Status</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" onChange={changeFltStatus} value={fltStatus}>
                            <option value="AVAILABLE">Dostępne</option>
                            <option value="UNAVAILABLE">Niedostepne</option>
                            <option value="0">Wszystkie</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" onChange={e => handlePoiChange(e)} type="checkbox" id="poiCheck" />
                        <label className="form-check-label" htmlFor="poiCheck">
                            Miejsca POI
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" onChange={e => handleCarparksChange(e)} type="checkbox" id="carparksCheck" />
                        <label className="form-check-label" htmlFor="carparksCheck">
                            Parkingi
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapFilters;