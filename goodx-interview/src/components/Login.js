import React, { useState } from "react";
import FailedAlert from "./FailedAlert";
import Button from "./Button";

const apiurl = "https://dev_interview.qagoodx.co.za";

interface LoginProps {
  handleLogin: () => void;
  bookingsView: () => void;
  demoAlert: () => void;
  seeMyBookings: () => void;
  settingStatus: () => void;
  settingPatients: () => void;
  setbTypes: () => void;
}

function Login({
  handleLogin,
  bookingsView,
  demoAlert,
  seeMyBookings,
  settingStatus,
  settingPatients,
  setbTypes,
}: LoginProps) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="container">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4 bgwhite- rounded p-3 shadow">
          <div className="row justify-content-center mb-4">
            <div className="row justify-content-center">
              <h1>Please Enter Your Credentials</h1>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <label htmlFor="user" className="form-label">
                  Username:
                </label>
              </div>

              <div className="col">
                <input
                  id="user"
                  className="form-control"
                  type="text"
                  defaultValue={name}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="pass" className="form-label">
                  Password:
                </label>
              </div>
              <div className="col">
                <input
                  id="pass"
                  className="form-control"
                  type="password"
                  defaultValue={pass}
                />
              </div>
            </div>
            <br />
            {alertVisible === true && <FailedAlert>my alert</FailedAlert>}
            <div className="d-flex flex-row-reverse p-3">
              <Button
                className="float-right"
                onClick={() =>
                  validate(
                    document.getElementById("user").value,
                    document.getElementById("pass").value,
                    setAlertVisible,
                    handleLogin,
                    bookingsView,
                    demoAlert,
                    seeMyBookings,
                    settingStatus,
                    settingPatients,
                    setbTypes
                  )
                }
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function validate(
  user,
  pass,
  setAlertVisible,
  handleLogin,
  bookingsView,
  demoAlert,
  seeMyBookings,
  settingStatus,
  settingPatients,
  setbTypes
) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status === "OK") {
      let temp =
        'session_id="\\"' + objData.data.uid + '\\"_applicant_003";Path=/;';
      sessionStorage.setItem("jank", temp);
      document.cookie = sessionStorage.getItem("jank");
      getDiary(demoAlert);
      getStatus(settingStatus);
      getPatients(settingPatients);
      getBType(setbTypes);
      getBookingData(seeMyBookings, demoAlert);
      setAlertVisible(false);
      handleLogin(false);
      bookingsView(true);
    } else {
      //Authentication error or unexpected error; show alert
      setAlertVisible(true);
    }
  };
  xhttp.open("POST", apiurl + "/api/session");
  var sending =
    '{"model": {"timeout": 259200},"auth": [["password",{"username": "' +
    user +
    '","password": "' +
    pass +
    '"}]]}';
  xhttp.send(sending);
  /*setAlertVisible(false);
  handleLogin(false);
  bookingsView(true);*/
}

function getDiary(demoAlert) {
  const obj = JSON.parse(
    '{"status":"OK","data":[{"uid":3,"entity_uid":3,"treating_doctor_uid":5,"service_center_uid":9824,"booking_type_uid":null,"name":"GP_3","uuid":"bbfe4986-6b29-44b1-998d-2737183c2f24","disabled":false}]}'
  );
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    //alert('got response');
    let objData = JSON.parse(this.responseText);
    if (objData.status == "SESSION_INVALID:NOEXIST") {
      demoAlert(
        "Please Note: Response from server is: 'SESSION_INVALID:NOEXIST'. For demo purposes we'll be using static values to at least demo the website"
      );
      sessionStorage.setItem("diary_uid", obj.data[0].uid);
      sessionStorage.setItem("entity_uid", obj.data[0].entity_uid);
    } else if (objData.status == "OK") {
      sessionStorage.setItem("diary_uid", objData.data[0].uid);
      sessionStorage.setItem("entity_uid", objData.data[0].entity_uid);
    }
  };

  xhttp.open("GET", apiurl + "/api/diary");
  xhttp.withCredentials = true;

  xhttp.send();
}

function getBookingData(setBookingData, demoAlert) {
  const someData = JSON.parse(
    '{"status":"OK","data":[{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":88,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-03-09T06:43:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"62abdda6-3e05-4e53-98b5-1fbf2b45d247"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":84,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":17,"patient_uid":null,"start_time":"2024-02-06T15:00:00","duration":15,"treating_doctor_uid":null,"reason":"Test testing 12345568479","invoice_nr":"TMP54","cancelled":true,"uuid":"73575eb2-e97a-40cd-8420-eb328608a295"},{"patient_name":"NAME","patient_surname":"SURNAME","debtor_name":"NAME","debtor_surname":"SURNAME","uid":85,"entity_uid":3,"diary_uid":3,"booking_type_uid":11,"booking_status_uid":16,"patient_uid":5,"start_time":"2024-02-06T15:00:00","duration":15,"treating_doctor_uid":null,"reason":"","invoice_nr":"TMP55","cancelled":false,"uuid":"1f867731-b6a3-4cec-bc72-8a6fd95e2ff9"},{"patient_name":"SUSPENSE","patient_surname":"ERA SUSPENSE","debtor_name":"SUSPENSE","debtor_surname":"ERA SUSPENSE","uid":86,"entity_uid":3,"diary_uid":3,"booking_type_uid":10,"booking_status_uid":16,"patient_uid":9,"start_time":"2024-02-06T17:00:00","duration":15,"treating_doctor_uid":null,"reason":"","invoice_nr":"TMP56","cancelled":false,"uuid":"1b6877cf-b0b2-4997-a92d-756084bf6dfd"},{"patient_name":"JOURNAL","patient_surname":"ERA JOURNAL","debtor_name":"JOURNAL","debtor_surname":"ERA JOURNAL","uid":87,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":16,"patient_uid":13,"start_time":"2024-02-06T15:00:00","duration":15,"treating_doctor_uid":null,"reason":"ergdrfgv","invoice_nr":"TMP57","cancelled":false,"uuid":"16b34639-bf5b-47a5-9f1a-1555a50ad9e1"},{"patient_name":"NAME","patient_surname":"SURNAME","debtor_name":"NAME","debtor_surname":"SURNAME","uid":71,"entity_uid":3,"diary_uid":3,"booking_type_uid":10,"booking_status_uid":16,"patient_uid":5,"start_time":"2024-02-05T08:00:00","duration":15,"treating_doctor_uid":null,"reason":"Cool example reason here123","invoice_nr":"TMP42","cancelled":false,"uuid":"29624013-5ea2-4e6a-9de6-7c37838c77f9"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":200,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":17,"patient_uid":null,"start_time":"2024-05-19T08:00:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"22edaafa-222d-4861-8b31-1f86ac8d2233"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":197,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-05-17T08:30:00","duration":60,"treating_doctor_uid":5,"reason":"testing reasons","invoice_nr":null,"cancelled":false,"uuid":"48268053-8793-43b2-939a-9eb74c3d26d5"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":201,"entity_uid":3,"diary_uid":3,"booking_type_uid":12,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-05-19T09:00:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"f9d36423-03c4-4ef7-ad20-84535a64093d"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":202,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":19,"patient_uid":null,"start_time":"2024-05-19T10:00:00","duration":60,"treating_doctor_uid":5,"reason":null,"invoice_nr":null,"cancelled":false,"uuid":"e3310c44-2346-40b1-997a-a26874101236"},{"patient_name":null,"patient_surname":null,"debtor_name":null,"debtor_surname":null,"uid":133,"entity_uid":3,"diary_uid":3,"booking_type_uid":13,"booking_status_uid":16,"patient_uid":null,"start_time":"2024-04-20T14:07:00","duration":60,"treating_doctor_uid":5,"reason":"I dont wanna work","invoice_nr":null,"cancelled":false,"uuid":"8927c15f-299c-4d80-bd74-298ecaf38680"}]}'
  );
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);

    try {
      if (objData.status == "SESSION_INVALID:NOEXIST") {
        demoAlert(
          "Please Note: Response from server is: 'SESSION_INVALID:NOEXIST'. For demo purposes we'll be using static values to at least demo the website."
        );
        setBookingData(someData);
      } else if (objData.status === "OK") {
        demoAlert("");
        setBookingData(objData);
      }
    } catch (e) {
      demoAlert("Something unexpected happened :(/n" + e);
    }
  };
  const stringy =
    "?fields=[%0A%20%20%20%20[%22AS%22,[%22I%22,%22patient_uid%22,%22name%22],%22patient_name%22],%0A%20%20%20%20[%22AS%22,[%22I%22,%22patient_uid%22,%22surname%22],%22patient_surname%22],%0A%20%20%20%20[%22AS%22,[%22I%22,%22patient_uid%22,%22debtor_uid%22,%22name%22],%22debtor_name%22],%0A%20%20%20%20[%22AS%22,[%22I%22,%22patient_uid%22,%22debtor_uid%22,%22surname%22],%22debtor_surname%22],%0A%20%20%20%20%22uid%22,%0A%20%20%20%20%22entity_uid%22,%0A%20%20%20%20%22diary_uid%22,%0A%20%20%20%20%22booking_type_uid%22,%0A%20%20%20%20%22booking_status_uid%22,%0A%20%20%20%20%22patient_uid%22,%0A%20%20%20%20%22start_time%22,%0A%20%20%20%20%22duration%22,%0A%20%20%20%20%22treating_doctor_uid%22,%0A%20%20%20%20%22reason%22,%0A%20%20%20%20%22invoice_nr%22,%0A%20%20%20%20%22cancelled%22,%0A%20%20%20%20%22uuid%22%0A]"; //data I get?
  xhttp.open("GET", apiurl + "/api/diary" + stringy);
  //xhttp.withCredentials = true;

  xhttp.send();
}

function getStatus(settingStatus) {
  let statusList = JSON.parse(
    '{"status":"OK","data":[{"uid":20,"entity_uid":3,"diary_uid":3,"name":"Done","next_booking_status_uid":null,"is_arrived":false,"is_final":false,"disabled":false},{"uid":19,"entity_uid":3,"diary_uid":3,"name":"Treated","next_booking_status_uid":null,"is_arrived":false,"is_final":false,"disabled":false},{"uid":18,"entity_uid":3,"diary_uid":3,"name":"Ready","next_booking_status_uid":null,"is_arrived":false,"is_final":false,"disabled":false},{"uid":17,"entity_uid":3,"diary_uid":3,"name":"Arrived","next_booking_status_uid":null,"is_arrived":false,"is_final":false,"disabled":false},{"uid":16,"entity_uid":3,"diary_uid":3,"name":"Booked","next_booking_status_uid":null,"is_arrived":false,"is_final":false,"disabled":false}]}'
  );
  //statusList = JSON.parse(statusList);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status === "OK") {
      console.log(objData);
      settingStatus(JSON.stringify(objData));
    } else {
      //setStatus((seeStatus) => statusList.data, [control]);
      settingStatus(JSON.stringify(statusList.data));
    }
  };
  const stringy =
    "?fields=[%0A%20%20%20%20%22uid%22,%0A%20%20%20%20%22entity_uid%22,%0A%20%20%20%20%22diary_uid%22,%0A%20%20%20%20%22name%22,%0A%20%20%20%20%22next_booking_status_uid%22,%0A%20%20%20%20%22is_arrived%22,%0A%20%20%20%20%22is_final%22,%0A%20%20%20%20%22disabled%22%0A]";
  xhttp.open("GET", apiurl + "/api/booking_status" + stringy);
  xhttp.send();
}

function getPatients(settingPatients) {
  let patienList = JSON.parse(
    '{"status":"OK","data":[{"uid":13,"entity_uid":3,"debtor_uid":13,"name":"JOURNAL","surname":"ERAJOURNAL","initials":"N","title":"MRS","id_type":null,"id_no":"0001025000080","date_of_birth":"2000-01-02","mobile_no":"0821234567","email":"info@goodx.co.za","file_no":"TEST","gender":"male","dependant_no":"00","dependant_type":"main_member","acc_identifier":"000000401","gap_medical_aid_option_uid":null,"gap_medical_aid_no":null,"private":false,"patient_classification_uid":null},{"uid":9,"entity_uid":3,"debtor_uid":9,"name":"SUSPENSE","surname":"ERASUSPENSE","initials":"N","title":"MRS","id_type":null,"id_no":"0001025000080","date_of_birth":"2000-01-02","mobile_no":"0821234567","email":"info@goodx.co.za","file_no":"TEST","gender":"male","dependant_no":"00","dependant_type":"main_member","acc_identifier":"000000301","gap_medical_aid_option_uid":null,"gap_medical_aid_no":null,"private":false,"patient_classification_uid":null},{"uid":5,"entity_uid":3,"debtor_uid":5,"name":"NAME","surname":"SURNAME","initials":"N","title":"MRS","id_type":null,"id_no":"0001025000080","date_of_birth":"2000-01-02","mobile_no":"0821234567","email":"info@goodx.co.za","file_no":"TEST","gender":"male","dependant_no":"00","dependant_type":"main_member","acc_identifier":"000000201","gap_medical_aid_option_uid":null,"gap_medical_aid_no":null,"private":false,"patient_classification_uid":null}]}'
  );

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status === "OK") {
      settingPatients(JSON.stringify(objData.data));
    } else {
      settingPatients(JSON.stringify(patienList.data));
    }
  };
  const stringy =
    "?fields=[%0A%09%22uid%22,%0A%09%22entity_uid%22,%0A%09%22debtor_uid%22,%0A%09%22name%22,%0A%09%22surname%22,%0A%09%22initials%22,%0A%09%22title%22,%0A%09%22id_type%22,%0A%09%22id_no%22,%0A%09%22date_of_birth%22,%0A%09%22mobile_no%22,%0A%09%22email%22,%0A%09%22file_no%22,%0A%09%22gender%22,%0A%09%22dependant_no%22,%0A%09%22dependant_type%22,%0A%09%22acc_identifier%22,%0A%09%22gap_medical_aid_option_uid%22,%0A%09%22gap_medical_aid_no%22,%0A%09%22private%22,%0A%09%22patient_classification_uid%22%0A]";
  xhttp.open("GET", apiurl + "/api/patients" + stringy);
  xhttp.send();
}

function getBType(setTypes) {
  let patienList = JSON.parse(
    '{"status":"OK","data":[{"uid":13,"entity_uid":3,"diary_uid":3,"name":"Outofoffice","booking_status_uid":null,"disabled":false,"uuid":"ea25221b-807a-448e-8d6e-b2324cf9e3bc"},{"uid":12,"entity_uid":3,"diary_uid":3,"name":"Meeting","booking_status_uid":null,"disabled":false,"uuid":"b5bdba85-5b51-4a22-aa85-e404529ae7b1"},{"uid":11,"entity_uid":3,"diary_uid":3,"name":"Follow-up","booking_status_uid":null,"disabled":false,"uuid":"cb813f6e-aa27-4ffb-802d-0276d7f10f68"},{"uid":10,"entity_uid":3,"diary_uid":3,"name":"Consultation","booking_status_uid":null,"disabled":false,"uuid":"80d9fd7a-b5fb-4005-bed2-390b2da1338e"}]}'
  );

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status === "OK") {
      setTypes(JSON.stringify(objData.data));
    } else {
      //console.log(patienList.data);
      setTypes(JSON.stringify(patienList.data));
    }
  };
  const stringy =
    "?fields=[%0A%20%20%20%20%22uid%22,%0A%20%20%20%20%22entity_uid%22,%0A%20%20%20%20%22diary_uid%22,%0A%20%20%20%20%22name%22,%0A%20%20%20%20%22booking_status_uid%22,%0A%20%20%20%20%22disabled%22,%0A%20%20%20%20%22uuid%22%0A]";
  xhttp.open("GET", apiurl + "/api/booking_type" + stringy);
  xhttp.send();
}

export default Login;
