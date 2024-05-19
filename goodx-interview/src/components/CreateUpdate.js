import React from "react";
import Button from "./Button";

interface CreateUpdateProps {
  updateCreateView: () => void;
  todo: string;
  bookingsView: () => void;
}

function CreateUpdate({ updateCreateView, bookingsView }) {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="bgwhite- rounded p-3 shadow">
          <div className="row justify-content-center mb-4">
            <div className="row justify-content-center">
              <div>
                <h1>New booking</h1>
                <hr />
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Patient name:</label>
                </div>

                <div className="col">
                  <input
                    id="patientName"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Booking Satus:</label>
                </div>

                <div className="col">
                  <input id="Booking" className="form-control" type="text" />
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
                    type="text"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Duration of visit:</label>
                </div>

                <div className="col">
                  <input id="duration" className="form-control" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="form-label">Reason for visit:</label>
                </div>

                <div className="col">
                  <input id="reason" className="form-control" type="text" />
                </div>
              </div>

              <div className="row p-2">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                  <Button
                    color="danger"
                    onClick={() =>
                      moveToBooking(bookingsView, updateCreateView)
                    }
                  >
                    Cancel
                  </Button>
                </div>

                <div className="col start-100">
                  <Button
                    onClick={() =>
                      moveToBooking(bookingsView, updateCreateView)
                    }
                  >
                    Create
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

/*
        

        "booking_type_uid": {{booking_type_uid}}, // Type of booking to be created
        "booking_status_uid": {{booking_status_uid}}, // The status that the created booking should be set to.
        "start_time": "{{date_string}}T08:00:00", // Start date and time for the created booking.
        "duration": 15, // Duration for the booking
        "patient_uid": {{patient_uid}}, // Patient for which the booking is created
        "reason": "Cool example reason here", // A reason for the created booking. (e.g Patient has neck pain)
    }
}*/
