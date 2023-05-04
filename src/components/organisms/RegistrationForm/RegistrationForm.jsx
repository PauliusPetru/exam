import { useState } from "react";
import { useRecoilValue } from "recoil";
import Form from "../../molecules/Form";
import ICONS from "../../../shared/icons";
import client, { API } from "../../../shared/api/api";
import { useTheme } from "styled-components";

const RegistrationForm = ({ closeModal, showRegistration }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setnName] = useState("");
  const [nameError, setnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const inputs = () => {
    let fields = [
      {
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
        type: "password",
        label: "Password",
        placeholder: "Password...",
        icon: ICONS.lock,
        value: password,
        setValue: (value) => setPassword(value),
        required: true,
        errorMessage: passwordError,
      },
    ];

    fields.unshift({
      type: "text",
      label: "Name",
      placeholder: "Name...",
      icon: ICONS.user,
      value: name,
      setValue: (value) => setnName(value),
      required: true,
      errorMessage: nameError,
    });
    return fields;
  };

  // const handleSubmit = async () => {
  //   const notValid = inputs().filter((input) =>
  //     !input.required ? false : input.value ? false : true
  //   );

  //   inputs().forEach((element) => {
  //     if (element.label == "Email") {
  //       setEmailError(
  //         notValid.find((x) => element.label == x.label)
  //           ? "Required"
  //           : ""
  //       );
  //     } else if (element.label == "Password") {
  //       setpasswordError(
  //         notValid.find((x) => element.label == x.label)
  //         ? "Required"
  //         : ""
  //       );
  //     } else if (element.label == "Name") {
  //       setnameError(
  //         notValid.find((x) => element.label == x.label)
  //         ? "Required"
  //         : ""
  //       );
  //     }
  //   });

  //   if (notValid.length) {
  //     return;
  //   }

  // let users = await client.get(API.baseUrl.users);

  // const findUser = users.find(
  //   (user) => user.email.toLowerCase() === email.toLowerCase()
  // );

  //   if (isRegistration) {
  //     if (findUser) {
  //       setEmailError("userAlreadyExist");
  //       return;
  //     } else {
  //       const userData = {
  //         id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
  //         name: name,
  //         email: email,
  //         password: password,
  //         todos: [],
  //       };
  //       await client.post(API.baseUrl.users, userData);

  //       setSuccessMessage(
  //         isRegistration
  //           ? TEXTS.page.registration.successRegistration[language]
  //           : TEXTS.page.registration.successLogin[language]
  //       );

  //       setTimeout(() => {
  //         navigate("todos");
  //       }, 1500);
  //     }
  //   } else {
  //     if (!findUser) {
  //       setEmailError(TEXTS.page.registration.userDoesntExist[language]);
  //       return;
  //     } else {
  //       if (password === findUser.password) {
  //         localStorage.setItem(CONSTANTS.userData, JSON.stringify(findUser));

  //         setSuccessMessage(
  //           isRegistration
  //             ? TEXTS.page.registration.successRegistration[language]
  //             : TEXTS.page.registration.successLogin[language]
  //         );

  //         setTimeout(() => {
  //           navigate("todos");
  //         }, 1500);
  //       } else {
  //         setPassword("");
  //         setpasswordError(TEXTS.page.registration.wrongPassword[language]);
  //       }
  //     }
  //   }
  // };

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
      handleSubmit={() => {}}
      buttonTitle='Register'
      footer={""}
    />
  );
};

export default RegistrationForm;
