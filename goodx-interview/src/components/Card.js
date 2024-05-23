import React from "react";
import Button from "./Button";

interface CardProps {
  data: String;
  index: int;
  bookingsView: () => void;
  updateCreateView: () => void;
  updatePage: () => void;
  setIndex: () => void;
  moveToCreate: () => void;
  updatePreFilled: () => void;
}

function Card({
  data,
  index,
  bookingsView,
  updateCreateView,
  updatePage,
  setIndex,
  moveToCreate,
  updatePreFilled,
}: CardProps) {
  /* obj data
  0: patient_name; 
1: patient_surname; 
2: patient_uid; 
3: booking_type_uid; 
4: booking_status_uid; 
5: reason; 
6: start_time.substring(11, 16);
7: duration; 
8: uid; 
9: debtor_name; 
10:debtor_uid; 
11: Date
*/

  // string into an array for ease of use
  const obj = data.split(";"); //.split(";");

  //Checking in on null fields
  if (obj[0] == "null") {
    obj[0] = "Mr/Ms";
  }
  if (obj[1] == "null") {
    obj[1] = "Patient";
  }
  if (obj[5] == "null") {
    obj[5] = "Did not capture the reason for coming";
  }
  if (obj[9] == "null") {
    obj[9] = "Mr/Ms";
  }
  if (obj[10] == "null") {
    obj[10] = "Debtor";
  }
  return (
    <div className="card" id={"card" + index} onClick={setIndex(index)}>
      <div className="card-body">
        <h5 className="card-title">{obj[0] + " " + obj[1]}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {obj[6] + " - " + obj[7] + " minutes"}
        </h6>
        <p className="card-text">{obj[5]};</p>
      </div>
      <div className="d-flex flex-row-reverse p-2">
        <div>
          <Button
            color="outline-secondary"
            size="btn-sm"
            onClick={() => (
              updatePreFilled(
                obj[3],
                obj[4],
                obj[6],
                obj[7],
                obj[1],
                obj[5],
                obj[2],
                obj[0],
                obj[10],
                obj[11],
                obj[8]
              ),
              moveToCreate(bookingsView, updateCreateView, updatePage, "Update")
            )}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
