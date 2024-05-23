import Button from "./Button";
import { useState } from "react";
import Card from "./Card";

const apiurl = "https://dev_interview.qagoodx.co.za";

interface BookingsProps {
  updateCreateView: () => void;
  dateCheck: string;
  bookingsView: () => void;
  updatePage: () => void;
  demoAlert: () => void;
  updatePreFilled: () => void;
  changeToday: () => void;
}

function Bookings({
  updateCreateView,
  bookingsView,
  dateCheck,
  updatePage,
  updatePreFilled,
  demoAlert,
  data,
  changeToday,
}: BookingsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [bookingData, setBookingData] = useState("{}");
  //getData(setBookingData, demoAlert);

  function setIndex(val) {
    setSelectedIndex(val);
  }
  const filtered = filterout(dateCheck, data);

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="bgwhite- rounded p-3 shadow">
          <div className="row justify-content-center mb-4">
            <div className="row justify-content-center">
              <div className="row">
                <div>
                  <h1>Bookings for {dateCheck}</h1>
                </div>
              </div>
              <hr />
              <div className="p-2">
                {filtered.length > 0 ? (
                  filtered.map((item, index) => (
                    /*card(
                      item,
                      index,
                      bookingsView,
                      updateCreateView,
                      updatePage,
                      selectedIndex,
                      setIndex
                    )*/
                    <Card
                      data={item}
                      index={index}
                      bookingsView={bookingsView}
                      updateCreateView={updateCreateView}
                      updatePage={updatePage}
                      setIndex={setIndex}
                      indexState={selectedIndex}
                      moveToCreate={moveToCreate}
                      updatePreFilled={updatePreFilled}
                    ></Card>
                  ))
                ) : (
                  <div className="card-body">
                    <h5 className="card-title">No appointments found</h5>
                  </div>
                )}
              </div>

              <div className="d-flex flex-row-reverse p-2">
                <Button
                  onClick={() => (
                    updatePreFilled("", "", "", "", "", "", "", "", ""),
                    moveToCreate(
                      bookingsView,
                      updateCreateView,
                      updatePage,
                      "Create new"
                    )
                  )}
                >
                  Create a new booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function moveToCreate(bookingsView, updateCreateView, updatePage, page) {
  updatePage(page);
  bookingsView(false);
  updateCreateView(true);
}

function filterout(testDate, obj) {
  //console.log(obj);
  let r = [];
  let count = 0;
  let temp = "";
  if (obj.data) {
    for (var k = 0; k < obj.data.length; k++) {
      //Could use filter call when getting data?
      if (testDate === obj.data[k].start_time.substring(0, 10)) {
        temp = "";
        temp = obj.data[k].patient_name; //[0]
        temp = temp + ";";
        temp = temp + obj.data[k].patient_surname; //[1]
        temp = temp + ";";
        temp = temp + obj.data[k].patient_uid; //[2]
        temp = temp + ";";
        temp = temp + obj.data[k].booking_type_uid; //[3]
        temp = temp + ";";
        temp = temp + obj.data[k].booking_status_uid; //[4]
        temp = temp + ";";
        temp = temp + obj.data[k].reason; //[5]
        temp = temp + ";";
        temp = temp + obj.data[k].start_time.substring(11, 16); //[6]
        temp = temp + ";";
        temp = temp + obj.data[k].duration; //[7]
        temp = temp + ";";
        temp = temp + obj.data[k].uid; //[8]
        temp = temp + ";";
        temp = temp + obj.data[k].debtor_name; //[9]
        temp = temp + ";";
        temp = temp + obj.data[k].debtor_uid; //[10]
        temp = temp + ";";
        temp = temp + obj.data[k].start_time.substring(0, 10);
        r[count] = temp;
        count += 1;
      }
    }
  }
  //console.log("Exit Filterout");
  return r;
}

function getDataToChange(updatePreFilled) {
  console.log("This:" + " " + this);
}

export default Bookings;

/*<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  /*/

/*<div className="card">
      <div className="card-body">
        <h5 className="card-title">{obj[0] + " " + obj[1]}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{obj[4]}</h6>
        <p className="card-text">{obj[3]};</p>
      </div>
    </div> */
