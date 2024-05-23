//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Bookings from "./components/Bookings";
import Login from "./components/Login";
import CreateUpdate from "./components/CreateUpdate";
import Alert from "./components/Alert";

const apiurl = "https://dev_interview.qagoodx.co.za";

function App() {
  //statesd needed to share data between children of App
  const [needLogin, setNeedLogin] = useState(true); //used to control wether login section displays or not
  const [seeBookings, setSeeBookings] = useState(false); //used to control wether Bookings section displays or not
  const [seeUpdateCreate, setUpdateCreate] = useState(false); //used to control wether Create/Update/Delete section displays or not
  const [seePage, setPage] = useState("Create New");
  const [preFilled, setPreFilled] = useState(
    '{"type": "","status": "","time": "","duration": 0, "patient": "","reason": "", "patient_uid":"","d_name":"", "d_uid":""}'
  );
  const [statuses, setStatuses] = useState(""); //Do this to avoid "undefined errors"
  const [patients, setPatiens] = useState(""); //Do this to avoid "undefined errors"
  const [bookingTypes, setBookingTypes] = useState({});
  const [seeDemoAlert, setDemoAlert] = useState({ show: false, message: "" }); //For demo alert display
  const [seeDateBookings, setDateBookings] = useState({}); //For later if I want to make a date picker
  //Cant send state functions so we create these for the children to be able to change states
  function handleLogin(val) {
    setNeedLogin(val);
  }
  function bookingsView(val) {
    setSeeBookings(val);
  }
  function updateCreateView(val) {
    setUpdateCreate(val);
  }
  function updatePage(val) {
    setPage(val);
  }
  function settingStatus(val) {
    setStatuses(val);
  }
  function settingPatients(val) {
    setPatiens(val);
  }
  function setbTypes(val) {
    setBookingTypes(val);
  }
  function updatePreFilled(
    type,
    status,
    time,
    duration,
    patient,
    reason,
    patient_uid,
    d_name,
    d_uid
  ) {
    let temp = JSON.parse(preFilled);
    temp.type = type;
    temp.status = status;
    temp.time = time;
    temp.duration = duration;
    temp.patient = patient;
    temp.reason = reason;
    temp.patient_uid = patient_uid;
    temp.d_name = d_name;
    temp.d_uid = d_uid;
    setPreFilled(JSON.stringify(temp));
  }
  function demoAlert(val) {
    if (val === "") {
      setDemoAlert({ show: false, message: "" });
    } else {
      setDemoAlert({ show: true, message: val });
    }
  }
  function seeMyBookings(val) {
    setDateBookings(val);
  }

  //function to use states in children

  let t = new Date();
  let month = t.getMonth() + 1;
  if (month.length != 2) {
    month = "0" + month;
  }

  t = t.getFullYear() + "-" + month + "-" + t.getDate();
  const [today, setTime] = useState(t);
  function changeToday(val) {
    setTime(val);
  }
  return (
    <>
      <div className="container LoginContainer">
        {needLogin && (
          <Login
            handleLogin={handleLogin}
            bookingsView={bookingsView}
            demoAlert={demoAlert}
            seeMyBookings={seeMyBookings}
            settingStatus={settingStatus}
            settingPatients={settingPatients}
            setbTypes={setbTypes}
          />
        )}
      </div>
      <div>
        {seeDemoAlert.show && (
          <Alert demoAlert={demoAlert}>{seeDemoAlert.message}</Alert>
        )}
      </div>
      <div className="container DiaryContainer">
        {seeBookings && (
          <Bookings
            bookingsView={bookingsView}
            updateCreateView={updateCreateView}
            dateCheck={today}
            updatePage={updatePage}
            updatePreFilled={updatePreFilled}
            demoAlert={demoAlert}
            seeMyBookings={seeMyBookings}
            data={seeDateBookings}
          />
        )}
      </div>
      <div className="container CreateUpdateContainer">
        {seeUpdateCreate && (
          <CreateUpdate
            fieldData={preFilled}
            bookingsView={bookingsView}
            updateCreateView={updateCreateView}
            updatePage={updatePage}
            dateCheck={today}
            page={seePage}
            demoAlert={demoAlert}
            statuses={statuses}
            patients={patients}
            bType={bookingTypes}
            changeToday={changeToday}
          />
        )}
      </div>
    </>
  );
}

export default App;
