import React, { Component } from "react";
import TextField from "../TextField";
import "./form.css";

const TextFieldName = {
  id: 1,
  placeholder: "Petro",
  key: "name",
  textFieldTitle: "Name",
  invalidTextField: "enter correct name",
  type: "text",
};
const TextFieldEmail = {
  id: 2,
  key: "email",
  placeholder: "Ivanov@gmail.com",
  textFieldTitle: "email",
  invalidTextField: "enter correct email",
  type: "email",
};
const TextFieldPassword = {
  id: 3,
  key: "password",
  placeholder: "mandarin1",
  textFieldTitle: "password",
  invalidTextField: "enter correct password",
  type: "password",
};
const ErrorMassages = {
  whiteField: "Это поле обязательно к заполнению",
  wrongName: "Имя не должно превышать 10 символов",
  wrongEmail: "Email должен заканчиваться @gmail.com",
  wrongPassword: "В пароле должна быть хоть одна цифра",
};

export default class Form extends Component {
  state = {
    values: {
      name: "",
      email: "",
      password: "",
    },
    errors: {
      name: "",
      email: "",
      password: "",
    },
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState((state) => {
      return {
        ...state,
        values: { ...state.values, [name]: value },
      };
    });
  };

  setError = (textFieldName, errorMassage) => {
    this.setState((state) => {
      return {
        ...state,
        errors: { ...state.errors, [textFieldName]: errorMassage },
      };
    });
  };


  checkValid = ({ target: { name, value } }) => {
    if (!value) {
      this.setError(name, ErrorMassages.whiteField);
    } else {
      if (value.length > 10) {
        this.setError(name, ErrorMassages.wrongName);
      } else {
        this.setError(name, "");
      }
    }
  };

  render() {
    const { values, errors } = this.state;
    return (
      <form className="form__body">
        <title className="title_form">Form for Kostik</title>
        <TextField
          name="name"
          value={values.name}
          id={TextFieldName.id}
          placeholder={TextFieldName.placeholder}
          key={TextFieldName.key}
          textFieldTitle={TextFieldName.textFieldTitle}
          invalidTextField={errors.name}
          isValid={false}
          type={TextFieldName.type}
          handleChange={this.handleChange}
          checkValid={this.checkValid}
        />
        <TextField
          name="email"
          value={values.email}
          id={TextFieldEmail.id}
          placeholder={TextFieldEmail.placeholder}
          key={TextFieldEmail.key}
          textFieldTitle={TextFieldEmail.textFieldTitle}
          invalidTextField={errors.email}
          isValid={true}
          type={TextFieldEmail.type}
          handleChange={this.handleChange}
        />
        <TextField
          name="password"
          value={values.password}
          id={TextFieldPassword.id}
          placeholder={TextFieldPassword.placeholder}
          key={TextFieldPassword.key}
          textFieldTitle={TextFieldPassword.textFieldTitle}
          invalidTextField={errors.password}
          isValid={true}
          type={TextFieldPassword.type}
          handleChange={this.handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
