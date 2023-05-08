import { useState } from "react";
import Form from "../../molecules/Form";
import ICONS from "../../../shared/icons";

const RegistrationForm = ({ closeModal, onCreate }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setnName] = useState("");
  const [nameError, setnameError] = useState("");
  const [surname, setsurname] = useState("");
  const [surnameError, setsurnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [startYear, setstartYear] = useState(2023);
  const [startYearError, setstartYearError] = useState(null);
  const [startMonth, setstartMonth] = useState(1);
  const [startMonthError, setstartMonthError] = useState(null);
  const [endYear, setendYear] = useState(2024);
  const [endYearError, setendYearError] = useState(null);
  const [endMonth, setendMonth] = useState(1);
  const [endMonthError, setendMonthError] = useState(null);

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
        errorMessage: nameError,
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
    setSuccessMessage("Registration suscsefull");

    const clientModel = {
      name: name + " " + surname,
      email: email,
      startYear: startYear,
      startMonth: startMonth,
      endYear: endYear,
      endMonth: endMonth,
    };

    onCreate(clientModel);

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
      buttonTitle='Register'
      footer={""}
    />
  );
};

export default RegistrationForm;
