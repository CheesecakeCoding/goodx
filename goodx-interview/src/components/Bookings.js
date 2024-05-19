import Button from "./Button";
import { useState } from "react";

interface BookingsProps {
  updateCreateView: () => void;
  dateCheck: string;
  bookingsView: () => void;
}

function Bookings({
  updateCreateView,
  bookingsView,
  dateCheck,
}: BookingsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [bookingData, setBookingData] = useState("{}");
  const dat = getData(setBookingData);

  const filtered = filterout(dateCheck, dat);

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="bgwhite- rounded p-3 shadow">
          <div className="row justify-content-center mb-4">
            <div className="row justify-content-center">
              <div>
                <h1>Bookings for {dateCheck}</h1>
                <hr />
              </div>
              <div className="p-2">
                {filtered.length > 0 ? (
                  filtered.map((item) => card(item))
                ) : (
                  <div className="card-body">
                    <h5 className="card-title">No appointments found</h5>
                  </div>
                )}
              </div>

              <div className="row p-2">
                <div className="col"></div>
                <div className="col"></div>

                <div className="col start-100">
                  <Button
                    onClick={() => moveToCreate(bookingsView, updateCreateView)}
                  >
                    Create a new booking
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function moveToCreate(bookingsView, updateCreateView) {
  bookingsView(false);
  updateCreateView(true);
}

function getData(setBookingData) {
  //do the calls and requests here
  //but for now
  const someData = JSON.parse(
    '{"status":"OK","data":[{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":88,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-03-09T06:43:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"62abdda6-3e05-4e53-98b5-1fbf2b45d247"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":84,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":17,"patient_uid":null,"start_time":"2024-02-06T15:00:00","duration":15,"treating_doctor_uid":null,"reason":"Test testing 12345568479","invoice_nr":"TMP54","cancelled":true,"uuid":"73575eb2-e97a-40cd-8420-eb328608a295"},{"patient_name":"NAME","patient_surname":"SURNAME","debtor_name":"NAME","debtor_surname":"SURNAME","uid":85,"entity_uid":3,"diary_uid":3,"booking_type_uid":11,"booking_status_uid":16,"patient_uid":5,"start_time":"2024-02-06T15:00:00","duration":15,"treating_doctor_uid":null,"reason":"","invoice_nr":"TMP55","cancelled":false,"uuid":"1f867731-b6a3-4cec-bc72-8a6fd95e2ff9"},{"patient_name":"SUSPENSE","patient_surname":"ERA SUSPENSE","debtor_name":"SUSPENSE","debtor_surname":"ERA SUSPENSE","uid":86,"entity_uid":3,"diary_uid":3,"booking_type_uid":10,"booking_status_uid":16,"patient_uid":9,"start_time":"2024-02-06T17:00:00","duration":15,"treating_doctor_uid":null,"reason":"","invoice_nr":"TMP56","cancelled":false,"uuid":"1b6877cf-b0b2-4997-a92d-756084bf6dfd"},{"patient_name":"JOURNAL","patient_surname":"ERA JOURNAL","debtor_name":"JOURNAL","debtor_surname":"ERA JOURNAL","uid":87,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":16,"patient_uid":13,"start_time":"2024-02-06T15:00:00","duration":15,"treating_doctor_uid":null,"reason":"ergdrfgv","invoice_nr":"TMP57","cancelled":false,"uuid":"16b34639-bf5b-47a5-9f1a-1555a50ad9e1"},{"patient_name":"NAME","patient_surname":"SURNAME","debtor_name":"NAME","debtor_surname":"SURNAME","uid":71,"entity_uid":3,"diary_uid":3,"booking_type_uid":10,"booking_status_uid":16,"patient_uid":5,"start_time":"2024-02-05T08:00:00","duration":15,"treating_doctor_uid":null,"reason":"Cool example reason here123","invoice_nr":"TMP42","cancelled":false,"uuid":"29624013-5ea2-4e6a-9de6-7c37838c77f9"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":200,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":17,"patient_uid":null,"start_time":"2024-05-19T08:00:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"22edaafa-222d-4861-8b31-1f86ac8d2233"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":197,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-05-17T08:30:00","duration":60,"treating_doctor_uid":5,"reason":"testing reasons","invoice_nr":null,"cancelled":false,"uuid":"48268053-8793-43b2-939a-9eb74c3d26d5"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":201,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-05-19T09:00:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"f9d36423-03c4-4ef7-ad20-84535a64093d"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":202,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":19,"patient_uid":null,"start_time":"2024-05-19T10:00:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"e3310c44-2346-40b1-997a-a26874101236"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":133,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-04-20T14:07:00","duration":60,"treating_doctor_uid":5,"reason":"I dont wanna work","invoice_nr":null,"cancelled":false,"uuid":"8927c15f-299c-4d80-bd74-298ecaf38680"}]}'
  );
  //console.log(someData);
  return someData;
}

function filterout(testDate, obj) {
  let r = [];
  let count = 0;
  let temp = "";
  for (var k = 0; k < obj.data.length; k++) {
    if (testDate === obj.data[k].start_time.substring(0, 10)) {
      temp = "";
      temp = obj.data[k].patient_name;
      temp = temp + ";";
      temp = temp + obj.data[k].patient_surname;
      temp = temp + ";";
      temp = temp + obj.data[k].booking_type_uid;
      temp = temp + ";";
      temp = temp + obj.data[k].reason;
      temp = temp + ";";
      temp = temp + obj.data[k].start_time.substring(11, 16);
      r[count] = temp;
      count += 1;
    }
  }

  return r;
}

function card(obj) {
  obj = obj.split(";");
  let temp = "";
  if (obj[0] == "null") {
    obj[0] = "Mr/Ms";
  }
  if (obj[1] == "null") {
    obj[1] = "Anonomous";
  }
  if (obj[3] == "null") {
    obj[3] = "Did not capture the reason for coming";
  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{obj[0] + " " + obj[1]}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{obj[4]}</h6>
        <p className="card-text">{obj[3]};</p>
      </div>
    </div>
  );
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
