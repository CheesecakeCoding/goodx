import React, { useEffect, useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";

const apiurl = "https://dev_interview.qagoodx.co.za";

interface CreateUpdateProps {
  updateCreateView: () => void;
  updatePage: () => void;
  bookingsView: () => void;
  page: String;
  fieldData: String;
  statuses: String;
  patients: String;
  bookingTypes: String;
}

function CreateUpdate({
  updateCreateView,
  bookingsView,
  updatePage,
  page,
  fieldData,
  statuses,
  patients,
  bType,
}: CreateUpdateProps) {
  fieldData = JSON.parse(fieldData);

  return (
    <div className="container">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="bgwhite- rounded p-3 shadow">
          <div className="row justify-content-center mb-4">
            <div className="row justify-content-center">
              <div>
                <h1>{page} booking</h1>
                {page == "Update" ? (
                  <div className="d-flex flex-row-reverse p-2">
                    <Button
                      color="danger"
                      onClick={() =>
                        deleteBooking(
                          fieldData.uid,
                          bookingsView,
                          updateCreateView
                        )
                      }
                    >
                      DeleteBooking
                    </Button>
                  </div>
                ) : (
                  <div></div>
                )}
                <hr />
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Patient name:</label>
                </div>

                <div className="col">
                  <Dropdown
                    id="patient"
                    data={patients}
                    dValue={fieldData.patient_uid}
                  ></Dropdown>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Booking Type:</label>
                </div>

                <div className="col">
                  <Dropdown
                    id="types"
                    data={bType}
                    dValue={fieldData.type}
                  ></Dropdown>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Booking Status:</label>
                </div>
                <div className="col">
                  <Dropdown
                    id="stats"
                    data={statuses}
                    dValue={fieldData.status}
                  ></Dropdown>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Appointment date:</label>
                </div>

                <div className="col">
                  <input
                    id="appointmentDate"
                    className="form-control"
                    type="date"
                    defaultValue={fieldData.date}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Appointment time:</label>
                </div>

                <div className="col">
                  <input
                    id="appointmentTime"
                    className="form-control"
                    type="time"
                    defaultValue={fieldData.time}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Duration of visit:</label>
                </div>

                <div className="col">
                  <input
                    id="duration"
                    className="form-control"
                    type="number"
                    min="1"
                    max="1440"
                    defaultValue={fieldData.duration}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Reason for visit:</label>
                </div>

                <div className="col">
                  <input
                    id="reason"
                    className="form-control"
                    type="text"
                    defaultValue={fieldData.reason}
                  />
                </div>
              </div>

              <div className="d-flex flex-row-reverse p-3">
                <div>
                  <Button
                    onClick={() => (
                      createUpdate(page, fieldData.uid),
                      moveToBooking(bookingsView, updateCreateView)
                    )}
                  >
                    {page}
                  </Button>
                </div>

                <div>
                  <Button
                    color="danger"
                    onClick={() =>
                      moveToBooking(bookingsView, updateCreateView)
                    }
                  >
                    Cancel
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

function createUpdate(page, uid) {
  const btype = document.getElementById("types").value;
  const stats = document.getElementById("stats").value;
  const start = document.getElementById("appointmentTime").value;
  const duration = document.getElementById("duration").value;
  const patient = document.getElementById("patient").value;
  const reason = document.getElementById("reason").value;
  const date = document.getElementById("appointmentDate").value;

  let newDate = date + "T" + start;

  if (page == "Update") {
    update(uid, newDate, duration, patient, reason);
  } else if (page == "Create new") {
    create(btype, stats, newDate, duration, patient, reason);
  }
}

function update(uid, newDate, duration, patient, reason) {
  let body =
    '{"model":{"uid":"' +
    uid +
    '","start_time":"' +
    newDate +
    '","duration":"' +
    duration +
    '","patient_uid":"' +
    patient +
    '","reason":"' +
    reason +
    '","cancelled":false}}';
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status == "OK") {
      window.alert("Successfully created new booking");
    } else {
      window.alert("Something went wront.\n" + JSON.stringify(objData));
    }
  };

  xhttp.open("PUT", apiurl + "/api/booking/" + uid);

  xhttp.send(body);
}

function create(btype, stats, start, duration, patient, reason) {
  //Creating body for the request
  let body =
    '{"model":{"entity_uid": "' +
    sessionStorage.getItem("entity_uid") +
    '","diary_uid": "' +
    sessionStorage.getItem("diary_uid") +
    '","booking_type_uid": "';

  body =
    body +
    btype +
    '","booking_status_uid": "' +
    stats +
    '","start_time": "' +
    start +
    '","duration": "' +
    duration +
    '", "patient_uid": "' +
    patient +
    '","reason": "' +
    reason +
    '", "cancelled": false }}';
  //console.log(body);
  sendRequest(body);
}

function sendRequest(body) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status === "OK") {
      window.alert("New Booking created successfully");
    } else {
      window.alert("Something went wrong: (" + JSON.stringify(objData) + ")");
    }
  };
  xhttp.open("Get", apiurl + "/api/booking");
  xhttp.send(body);
}

function deleteBooking(uid, bookingsView, updateCreateView) {
  let text =
    "You are about to delete the booking.\nAre you sure you want to do that?";
  if (window.confirm(text)) {
    const xhttp = new XMLHttpRequest();
    const body = '{"model":{"uid":"' + uid + '","cancelled":true}}';
    xhttp.onload = function () {
      const data = JSON.parse(this.responseText);
      if ((data.status = "OK")) {
        window.alert("Booking deleted successfully");
        bookingsView(true);
        updateCreateView(false);
      } else {
        window.alert(
          "Something unexpected happened: \n" + JSON.stringify(data)
        );
      }
    };
    xhttp.open("PUT", apiurl + "/api/booking/" + uid);
    xhttp.send(body);
  }
}

function moveToBooking(bookingsView, updateCreateView) {
  bookingsView(true);
  updateCreateView(false);
}

export default CreateUpdate;
