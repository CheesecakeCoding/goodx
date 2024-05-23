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
                <hr />
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Patient name:</label>
                </div>

                <div className="col">
                  <Dropdown data={patients}></Dropdown>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Booking Type:</label>
                </div>

                <div className="col">
                  <Dropdown data={bType}></Dropdown>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Booking Status:</label>
                </div>
                <div className="col">
                  <Dropdown data={statuses}></Dropdown>
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
                    onClick={() =>
                      moveToBooking(bookingsView, updateCreateView)
                    }
                  >
                    Create
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

function moveToBooking(bookingsView, updateCreateView) {
  bookingsView(true);
  updateCreateView(false);
}

export default CreateUpdate;
