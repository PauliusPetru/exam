import { useState } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../shared/state/atoms";
import TEXTS from "../../../shared/texts/TEXTS";
import CONSTANTS from "../../../shared/CONSTANTS";
import Form from "../../molecules/Form";
import ICONS from "../../../shared/icons";
import client, { API } from "../../../shared/api/api";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ closeModal, showRegistration }) => {
  const language = useRecoilValue(languageState);
  const theme = useTheme();
  const [isRegistration, setisRegistration] = useState(showRegistration);
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setnName] = useState("");
  const [nameError, setnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const navigate = useNavigate();

  const inputs = () => {
    let fields = [
      {
        type: "email",
        label: TEXTS.page.registration.email[language],
        placeholder: TEXTS.page.registration.emailPlaceholder[language],
        icon: ICONS.envelope,
        value: email,
        setValue: (value) => setEmail(value),
        required: true,
        errorMessage: emailError,
      },
      {
        type: "password",
        label: TEXTS.page.registration.password[language],
        placeholder: TEXTS.page.registration.passwordPlaceholder[language],
        icon: ICONS.lock,
        value: password,
        setValue: (value) => setPassword(value),
        required: true,
        errorMessage: passwordError,
      },
    ];

    if (isRegistration) {
      fields.unshift({
        type: "text",
        label: TEXTS.page.registration.name[language],
        placeholder: TEXTS.page.registration.namePlaceholder[language],
        icon: ICONS.user,
        value: name,
        setValue: (value) => setnName(value),
        required: true,
        errorMessage: nameError,
      });
    }
    return fields;
  };

  const handleSubmit = async () => {
    const notValid = inputs().filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    inputs().forEach((element) => {
      if (element.label == TEXTS.page.registration.email[language]) {
        setEmailError(
          notValid.find((x) => element.label == x.label)
            ? TEXTS.page.registration.required[language]
            : ""
        );
      } else if (element.label == TEXTS.page.registration.password[language]) {
        setpasswordError(
          notValid.find((x) => element.label == x.label)
            ? TEXTS.page.registration.required[language]
            : ""
        );
      } else if (element.label == TEXTS.page.registration.name[language]) {
        setnameError(
          notValid.find((x) => element.label == x.label)
            ? TEXTS.page.registration.required[language]
            : ""
        );
      }
    });

    if (notValid.length) {
      return;
    }

    let users = await client.get(API.baseUrl.users);

    const findUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (isRegistration) {
      if (findUser) {
        setEmailError(TEXTS.page.registration.userAlreadyExist[language]);
        return;
      } else {
        const userData = {
          id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
          name: name,
          email: email,
          password: password,
          todos: [],
        };
        await client.post(API.baseUrl.users, userData);
        localStorage.setItem(CONSTANTS.userData, JSON.stringify(userData));

        setSuccessMessage(
          isRegistration
            ? TEXTS.page.registration.successRegistration[language]
            : TEXTS.page.registration.successLogin[language]
        );

        setTimeout(() => {
          navigate("todos");
        }, 1500);
      }
    } else {
      if (!findUser) {
        setEmailError(TEXTS.page.registration.userDoesntExist[language]);
        return;
      } else {
        if (password === findUser.password) {
          localStorage.setItem(CONSTANTS.userData, JSON.stringify(findUser));

          setSuccessMessage(
            isRegistration
              ? TEXTS.page.registration.successRegistration[language]
              : TEXTS.page.registration.successLogin[language]
          );

          setTimeout(() => {
            navigate("todos");
          }, 1500);
        } else {
          setPassword("");
          setpasswordError(TEXTS.page.registration.wrongPassword[language]);
        }
      }
    }
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
      buttonTitle={
        isRegistration
          ? TEXTS.page.registration.register[language]
          : TEXTS.page.registration.login[language]
      }
      footer={""}
    />
  );
};

export default RegistrationForm;
