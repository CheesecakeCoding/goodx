//import { MouseEvent } from "react";

import { useState } from "react";

interface DiariesProps {
  diaryView: () => void;
}

function Diaries({ diaryView }: DiariesProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [diaryData, setDiaryData] = useState("{}");
  getData(setDiaryData);
  return <></>;
}

function getData(setDiaryData) {
  //do the calls and requests here
  //but for now
  const someData = JSON.parse(
    '{"status":"OK","data":[{"uid":3,"entity_uid":3,"treating_doctor_uid":5,"service_center_uid":9824,"booking_type_uid":null,"name":"GP_3","uuid":"bbfe4986-6b29-44b1-998d-2737183c2f24","disabled":false,"booking_types":[{"uid":13,"name":"Out of office","uuid":"ea25221b-807a-448e-8d6e-b2324cf9e3bc","color":"#cdd1cf","layer":0,"telemed":false,"visible":true,"disabled":false,"duration":60,"diary_uid":3,"mygc_name":null,"entity_uid":3,"font_color":null,"invoicable":"no","sort_order":null,"updated_at":"2024-01-29T14:48:37.658266","updated_by":null,"auto_events":[],"stack_order":null,"invoice_lines":null,"booking_status_uid":null,"service_center_uid":null,"treating_doctor_uid":null,"enable_communications":true,"booking_workflow_event_templates":null},{"uid":12,"name":"Meeting","uuid":"b5bdba85-5b51-4a22-aa85-e404529ae7b1","color":"#237b7f","layer":1,"telemed":false,"visible":true,"disabled":false,"duration":60,"diary_uid":3,"mygc_name":null,"entity_uid":3,"font_color":null,"invoicable":"no","sort_order":null,"updated_at":"2024-01-29T14:48:37.658266","updated_by":null,"auto_events":[],"stack_order":null,"invoice_lines":null,"booking_status_uid":null,"service_center_uid":null,"treating_doctor_uid":null,"enable_communications":true,"booking_workflow_event_templates":null},{"uid":11,"name":"Follow-up","uuid":"cb813f6e-aa27-4ffb-802d-0276d7f10f68","color":"#4aebf2","layer":1,"telemed":false,"visible":true,"disabled":false,"duration":15,"diary_uid":3,"mygc_name":null,"entity_uid":3,"font_color":null,"invoicable":"yes","sort_order":null,"updated_at":"2024-01-29T14:48:37.658266","updated_by":null,"auto_events":[],"stack_order":null,"invoice_lines":null,"booking_status_uid":null,"service_center_uid":null,"treating_doctor_uid":null,"enable_communications":true,"booking_workflow_event_templates":null},{"uid":10,"name":"Consultation","uuid":"80d9fd7a-b5fb-4005-bed2-390b2da1338e","color":"#d084e3","layer":1,"telemed":false,"visible":true,"disabled":false,"duration":15,"diary_uid":3,"mygc_name":null,"entity_uid":3,"font_color":null,"invoicable":"yes","sort_order":null,"updated_at":"2024-01-29T14:48:37.658266","updated_by":null,"auto_events":[],"stack_order":null,"invoice_lines":null,"booking_status_uid":null,"service_center_uid":null,"treating_doctor_uid":null,"enable_communications":true,"booking_workflow_event_templates":null}],"booking_statuses":[{"uid":20,"name":"Done","color":"#b0b0b0","visible":true,"disabled":false,"is_final":false,"diary_uid":3,"entity_uid":3,"font_color":null,"is_arrived":false,"sort_order":5,"updated_at":"2024-01-29T14:50:21.432216","updated_by":null,"stack_order":null,"next_booking_status_uid":null,"patient_outstanding_threshold":null},{"uid":19,"name":"Treated","color":"#f7b95b","visible":true,"disabled":false,"is_final":false,"diary_uid":3,"entity_uid":3,"font_color":null,"is_arrived":false,"sort_order":4,"updated_at":"2024-01-29T14:50:21.432216","updated_by":null,"stack_order":null,"next_booking_status_uid":null,"patient_outstanding_threshold":null},{"uid":18,"name":"Ready","color":"#67f35c","visible":true,"disabled":false,"is_final":false,"diary_uid":3,"entity_uid":3,"font_color":null,"is_arrived":false,"sort_order":3,"updated_at":"2024-01-29T14:50:21.432216","updated_by":null,"stack_order":null,"next_booking_status_uid":null,"patient_outstanding_threshold":null},{"uid":17,"name":"Arrived","color":"#fefd5c","visible":true,"disabled":false,"is_final":false,"diary_uid":3,"entity_uid":3,"font_color":null,"is_arrived":false,"sort_order":2,"updated_at":"2024-01-29T14:50:21.432216","updated_by":null,"stack_order":null,"next_booking_status_uid":null,"patient_outstanding_threshold":null},{"uid":16,"name":"Booked","color":"#11a4df","visible":true,"disabled":false,"is_final":false,"diary_uid":3,"entity_uid":3,"font_color":null,"is_arrived":false,"sort_order":1,"updated_at":"2024-01-29T14:50:21.432216","updated_by":null,"stack_order":null,"next_booking_status_uid":null,"patient_outstanding_threshold":null}]}]}'
  );
  console.log(someData);
  return someData;
}

export default Diaries;
