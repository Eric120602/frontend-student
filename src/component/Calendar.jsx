import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { getAvailableVehicleTypesForScheduling, getAvailableVehiclesInSession } from '../api/vehicles';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { getLeaves, getSchedule, submitBookSession } from '../api/schedule';
import AlertScreen from './AlertScreen';

const localizer = momentLocalizer(moment);

const fnOrAnMap = {
  FN: {
    start: "09:00:00 AM",
    end: "01:00:00 PM"
  },
  AN: {
    start: "02:00:00 PM",
    end: "06:00:00 PM"
  }
}

const eventColors = {
  bookedSession: 'blue',
  leave: 'grey',
};

const eventStyleGetter = (event) => {
  const color = eventColors[event.type] || 'blue'; 
  const style = {
    backgroundColor: color,
    borderRadius: '4px',
    opacity: 0.8,
    color: 'black',
    border: 'none',
    display: 'block',
  };
  return {
    style,
  };
};

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isScheduling, setIsScheduling] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedType, setSelectedType] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [vehicleTypeOptions, setVehicleTypeOptions] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");

  useEffect(() => {
    loadVehicleTypeOptions();
    loadEvents()
  }, []);

  const loadEvents = async () => {
    const leaves = await getLeaves()
    let events = []
    leaves.map((leave) => {
      events.push({
        title: `Holiday: ${leave.fnOrAn}`,
        start: new Date(leave.day+" " + fnOrAnMap[leave.fnOrAn].start),
        end: new Date(leave.day+" " + fnOrAnMap[leave.fnOrAn].end),
        type: "leave"
      })
    })
    const schedule = await getSchedule()
    schedule.map((session) => {
      events.push({
        title: `Session: ${session.session} - ${session.modelName}`,
        start: new Date(session.date+" " + fnOrAnMap[session.session].start),
        end: new Date(session.date+" " + fnOrAnMap[session.session].end),
        type: "bookedSession"
      })
    })
    setEvents(events)
  }

  const loadVehicleTypeOptions = async () => {
    try {
      let vehicleTypeOptions = await getAvailableVehicleTypesForScheduling()
      setVehicleTypeOptions(vehicleTypeOptions)
    }
    catch (exception) {
      console.log("An unexpected error occured during vehicle type options loading: ", exception)
    }
  }

  const handleDateClick = ({ start }) => {
    if (!isScheduling) {
      setIsScheduling(true);
    }
    setSelectedDate(moment(start).format("YYYY-MM-DD"))
  }

  const handleChangeSession = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleVehicleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    loadVehicleOptions(type)
  };

  const loadVehicleOptions = async (vehicleTypeId) => {
    try {
      let params = {}
      params.vehicleType = vehicleTypeId
      params.date = selectedDate
      params.time = selectedSession
      let vehicleOptions = await getAvailableVehiclesInSession(params)
      setAvailableVehicles(vehicleOptions);
    }
    catch (exception) {
      console.log("An unexpected error occured during vehicle options loading: ", exception)
    }
  }

  const handleVehicleChange = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const flashAlert = (alertColor, alertMessage) => {
    setAlertColor(alertColor)
    setAlertMessage(alertMessage)
    setTimeout(() => {
      setAlertColor("")
      setAlertMessage("")
    }, 1500);
  }

  const bookSession = async () => {
    try {
      const body = {
        date: selectedDate,
        time: selectedSession
      }
      await submitBookSession(selectedVehicle, body)
      setIsScheduling(false);
      setSelectedDate("");
      setSelectedSession("");
      setSelectedType('');
      setSelectedVehicle('');
      setAvailableVehicles([]);
      flashAlert("success", "A session was completely booked")
      loadEvents()
    }
    catch (exception) {
      console.log("An unexpected error occured during booking session: ", exception)
      flashAlert("error", "An unexpected error occured while booking.")
    }
  };

  return (
    <div>
      <AlertScreen alertColor={alertColor} alertMessage={alertMessage} />
      <h1>Schedule</h1>
      <Calendar
        localizer={localizer}
        selectable
        events={events}
        onSelectSlot={handleDateClick}
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
      />

      {
        isScheduling &&
        <div>
          <FormControl>
            <FormLabel id="session-controlled-radio-buttons-group">Session</FormLabel>
            <RadioGroup
              aria-labelledby="session-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={selectedSession}
              onChange={handleChangeSession}
            >
              <FormControlLabel value="FN" control={<Radio />} label="Morning" />
              <FormControlLabel value="AN" control={<Radio />} label="Afternoon" />
            </RadioGroup>
          </FormControl>
          {
            selectedSession && (vehicleTypeOptions.length > 0 ?
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="vehicle-type-simple-select-label">Vehicle Type</InputLabel>
                <Select
                  labelId="vehicle-type-simple-select-label"
                  id="vehicle-type-simple-select"
                  value={selectedType}
                  label="Vehicle Type"
                  onChange={handleVehicleTypeChange}
                >
                  {
                    vehicleTypeOptions.map((type) => {
                      return <MenuItem value={type.id} key={type.id}>{type.name}</MenuItem>
                    })
                  }
                </Select>
              </FormControl> :
              <h5>Buy a package to schedule sessions</h5>)
          }
          {
            selectedType && (availableVehicles.length > 0 ?
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="vehicle-type-simple-select-label">Vehicle</InputLabel>
                <Select
                  labelId="vehicle-simple-select-label"
                  id="vehicle-simple-select"
                  value={selectedVehicle}
                  label="Vehicle"
                  onChange={handleVehicleChange}
                >
                  {
                    availableVehicles.map((vehicle) => {
                      return <MenuItem value={vehicle.id} key={vehicle.id}>{vehicle.modelName}</MenuItem>
                    })
                  }
                </Select>
              </FormControl> :
              <h5>No vehicles of this type are available for this session</h5>)
          }
          {
            selectedVehicle && (
              <Button variant="contained" color="success" sx={{margin: "20px"}} onClick={bookSession}>
                Book Session
              </Button>
            )}
        </div>
      }
    </div>
  );
};

export default MyCalendar;