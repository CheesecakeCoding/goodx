//import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Bookings from "./components/Bookings";
import Login from "./components/Login";
import CreateUpdate from "./components/CreateUpdate";

const apiurl = "https://dev_interview.qagoodx.co.za";

function App() {
  const [needLogin, setNeedLogin] = useState(true);
  const [seeBookings, setSeeBookings] = useState(false);
  const [seeUpdateCreate, setUpdateCreate] = useState(false);
  function handleLogin(val) {
    setNeedLogin(val);
  }
  function bookingsView(val) {
    setSeeBookings(val);
  }
  function updateCreateView(val) {
    setUpdateCreate(val);
  }
  let today = new Date();
  let month = today.getMonth() + 1;
  if (month.length != 2) {
    month = "0" + month;
  }

  today = today.getFullYear() + "-" + month + "-" + today.getDate();
  return (
    <>
      <div className="container LoginContainer">
        {needLogin && (
          <Login handleLogin={handleLogin} bookingsView={bookingsView} />
        )}
      </div>
      <div className="container DiaryContainer">
        {seeBookings && (
          <Bookings
            bookingsView={bookingsView}
            updateCreateView={updateCreateView}
            dateCheck={today}
          />
        )}
      </div>
      <div className="container CreateUpdateContainer">
        {seeUpdateCreate && (
          <CreateUpdate
            bookingsView={bookingsView}
            updateCreateView={updateCreateView}
            todo="create"
            dateCheck={today}
          />
        )}
      </div>
    </>
  );
}

export default App;
