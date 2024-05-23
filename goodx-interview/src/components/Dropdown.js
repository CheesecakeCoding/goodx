import React from "react";

interface DropdownProps {
  data: String;
  dValue: String;
  id: String;
}

function Dropdown({ data, dValue, idName, id }: DropdownProps) {
  let obj = JSON.parse(data);
  return (
    <select id={id} class="form-select" value={dValue}>
      <option value="none" selected disabled hidden>
        Select an Option
      </option>
      {obj.map((item) => (
        <option value={item.uid}>
          {item.surname ? item.name + " " + item.surname : item.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
