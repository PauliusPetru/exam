import { useState } from "react";
import Form from "../../molecules/Form";
import ICONS from "../../../shared/icons";
import Button from "../../atoms/Button";

const RegistrationForm = ({
  closeModal,
  onCreate,
  onDelete,
  onUpdate,
  reservation,
}) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setnName] = useState(
    reservation ? reservation.name.toString().split(" ")[0] : ""
  );
  const [nameError, setnameError] = useState("");
  const [surname, setsurname] = useState(
    reservation ? reservation.name.toString().split(" ")[1] : ""
  );
  const [surnameError, setsurnameError] = useState("");
  const [email, setEmail] = useState(reservation ? reservation.email : "");
  const [emailError, setEmailError] = useState();
  const [startYear, setstartYear] = useState(
    reservation ? reservation.startYear : 2023
  );
  const [startYearError, setstartYearError] = useState();
  const [startMonth, setstartMonth] = useState(
    reservation ? reservation.startMonth : 1
  );
  const [startMonthError, setstartMonthError] = useState("");
  const [endYear, setendYear] = useState(
    reservation ? reservation.endYear : 2024
  );
  const [endYearError, setendYearError] = useState("");
  const [endMonth, setendMonth] = useState(
    reservation ? reservation.endMonth : 1
  );
  const [endMonthError, setendMonthError] = useState("");

  const inputs = () => {
    let fields = [
      {
        id: "name",
        type: "text",
        label: "Name",
        placeholder: "Name...",
        icon: ICONS.user,
        value: name,
        setValue: (value) => setnName(value),
        required: true,
        errorMessage: nameError,
      },
      {
        id: "surname",
        type: "text",
        label: "Surname",
        placeholder: "Surname...",
        icon: ICONS.user,
        value: surname,
        setValue: (value) => setsurname(value),
        required: true,
        errorMessage: surnameError,
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter email...",
        icon: ICONS.envelope,
        value: email,
        setValue: (value) => setEmail(value),
        required: true,
        errorMessage: emailError,
      },
      {
        id: "startYear",
        type: "number",
        label: "Start Year",
        placeholder: "2023...",
        icon: ICONS.lock,
        value: startYear,
        setValue: (value) => setstartYear(value),
        required: true,
        errorMessage: startYearError,
      },
      {
        id: "startMonth",
        type: "number",
        label: "Start Month",
        placeholder: "1...",
        icon: ICONS.lock,
        value: startMonth,
        setValue: (value) => setstartMonth(value),
        required: true,
        errorMessage: startMonthError,
      },
      {
        id: "endYear",
        type: "number",
        label: "End Year",
        placeholder: "2030...",
        icon: ICONS.lock,
        value: endYear,
        setValue: (value) => setendYear(value),
        required: true,
        errorMessage: endYearError,
      },
      {
        id: "endMonth",
        type: "number",
        label: "End Month",
        placeholder: "1...",
        icon: ICONS.lock,
        value: endMonth,
        setValue: (value) => setendMonth(value),
        required: true,
        errorMessage: endMonthError,
      },
    ];

    return fields;
  };

  const handleSubmit = () => {
    var ableToSubmit = true;

    if (!name) {
      setnameError("Required");
      ableToSubmit = false;
    }
    if (!surname) {
      setsurnameError("Required");
      ableToSubmit = false;
    }
    if (!email) {
      setEmailError("Required");
      ableToSubmit = false;
    }
    if (2022 > startYear) {
      setstartYearError("Value has to be from 2023");
      ableToSubmit = false;
    }
    if (0 > startMonth && startMonth > 13) {
      setstartMonthError("Value has to be between 1-12");
      ableToSubmit = false;
    }
    if (!endYear) {
      setendYearError("Value has to be from 2023");
      ableToSubmit = false;
    }
    if (0 > endMonth || endMonth > 13) {
      setendMonthError("Value has to be between 1-12");
      ableToSubmit = false;
    }

    if (!ableToSubmit) {
      return;
    }

    if (startYear >= endYear && startMonth >= endMonth) {
      setendYearError("End date has to be greater then start date");
      setendMonthError("End date has to be greater then start date");
      ableToSubmit = false;
    }

    if (!ableToSubmit) {
      return;
    }

    setSuccessMessage("Suscsefull");

    const clientModel = {
      name: name + " " + surname,
      email: email,
      startYear: startYear,
      startMonth: startMonth,
      endYear: endYear,
      endMonth: endMonth,
    };

    if (reservation) {
      clientModel["_id"] = reservation._id;
      onUpdate(clientModel);
    } else {
      onCreate(clientModel);
    }

    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  if (successMessage) {
    return (
      <p>
        {ICONS.check} {successMessage}
      </p>
    );
  }

  return (
    <Form
      inputs={inputs()}
      handleSubmit={handleSubmit}
      buttonTitle={reservation ? "Save" : "Register"}
      footer={
        reservation && (
          <Button
            margin={"20px 0"}
            width={"100px"}
            action={() => {
              onDelete(reservation);
            }}
            text={"Delete"}
            color={"danger"}
          />
        )
      }
    />
  );
};

export default RegistrationForm;
