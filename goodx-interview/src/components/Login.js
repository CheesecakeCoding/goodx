import React, { useState } from "react";
import FailedAlert from "./FailedAlert";
import Button from "./Button";

const apiurl = "https://dev_interview.qagoodx.co.za";

interface LoginProps {
  handleLogin: () => void;
  bookingsView: () => void;
}

function Login({ handleLogin, bookingsView }: LoginProps) {
  //console.log(props);
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
            <div>
              <Button
                className="float-right"
                onClick={() =>
                  validate(
                    document.getElementById("user").value,
                    document.getElementById("pass").value,
                    setAlertVisible,
                    handleLogin,
                    bookingsView
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

function validate(user, pass, setAlertVisible, handleLogin, bookingsView) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let objData = JSON.parse(this.responseText);
    if (objData.status === "OK") {
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

export default Login;
