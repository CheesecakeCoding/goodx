import React from "react";

interface DropdownProps {
  data: String;
  dValue: String;
  idName: String;
}

function Dropdown({ data, dValue, idName }: DropdownProps) {
  let obj = JSON.parse(data);

  return (
    <select class="form-select" aria-label="Default select example">
      <option value="none" selected disabled hidden>
        Select an Option
      </option>
      {obj.map((item) => (
        <option value={item.uid}>{item.name}</option>
      ))}
    </select>
  );
}

export default Dropdown;
