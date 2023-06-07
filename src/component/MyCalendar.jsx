import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { getVehicles } from '../api/vehicles';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [two_wheeler, setTwoWheeler] = useState([]);
  const [events, setEvents] = useState([]);
  const [isScheduling, setIsScheduling] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    start: null,
    end: null,
    title: ''
  });
  const [selectedType, setSelectedType] = useState('');
  const [availableVehicles, setAvailableVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, [1]);

  const loadVehicles = async () => {
    console.log('Ethi');
    try {
      const response = await getVehicles();
      console.log(response)
      for (let i = 0; i < response.length; i++) {
        if (response[i].type === 4) {
          two_wheeler.push(response[i].model_name);
          console.log("helloooo", two_wheeler);
        }
      }
    } catch (error) {
      console.log('Unexpected error occurred', error);
    }
  };


  // Sample data for available vehicles based on type
  const vehicleOptions = {
    2:"two wheeler",
    3:"three wheeler",
    4:"four wheeler",
    5:"Heavy",
  };

  const handleTypeChange = (e) => {

    const type = e.target.value;
    console.log(type);
    setSelectedType(type);
    loadVehicleOptions(type)
  };

  const loadVehicleOptions = async(vehicleTypeId) => {
    try{
    let params = {}
    if (vehicleTypeId)
      params.category = vehicleTypeId
    let vehicleOptions = await getVehicles(params)
    setAvailableVehicles(vehicleOptions);
    }
    catch(exception){
      console.log("error",exception)
    }
  }



  const handleSelectSlot = ({ start, end }) => {
    if (!isScheduling) {
      setIsScheduling(true);
      setCurrentEvent({
        start,
        end,
        title: ''
      });
    }
  };

  const handleInputChange = (event) => {
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      title: event.target.value,
    }));
  };

  const handleVehicleChange = (e) => {
    const selectedVehicle = e.target.value;
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      title: prevEvent.title + "," + selectedVehicle,
    }));
  };


  //calendar events refresh avane fn ()
  const handleNext = () => {
    if (currentEvent.title.trim() === '') {
      alert('Please enter an event title.');
    } else {
      setEvents((prevEvents) => [...prevEvents, currentEvent]);  //leave api and schedule use effectil undkaiyt ivide addanam
      setIsScheduling(false);
      setCurrentEvent({
        start: null,
        end: null,
        title: '',
      });
    }
  };

  const vehicleTypes = Object.keys(vehicleOptions);

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        localizer={localizer}
        selectable
        events={events}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />

      {isScheduling && (
        <div>
          <h2>Schedule Event</h2>
          <label>
            Event Title:
            <br />
            <input
              id='morning'
              name="session"
              type="radio"
              value="morning"
              onChange={handleInputChange}
            /><label for="morning">Morning</label><br />

            <input
              id='evening'
              name="session"
              type="radio"
              value="Evening"
              onChange={handleInputChange}
            /><label for="evening">Evening</label><br />
          </label>
        </div>
      )}

      <label htmlFor="type">Select Vehicle Type:</label>
      <select id="type" value={selectedType} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        {vehicleTypes.map((type) => (
          <option key={type} value={type}>
            {vehicleOptions[type]}
          </option>
        ))}
      </select>

      {selectedType && (
        <div>
          <label htmlFor="vehicle">Select Vehicle:</label>
          <select id="vehicle" value={currentEvent.vehicle ? currentEvent.vehicle.id:""} onChange={handleVehicleChange}>
            <option value="">Select Vehicle</option>
            {availableVehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.model_name}
              </option>
            ))}
          </select>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;