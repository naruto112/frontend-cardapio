import React from "react";
import SignUp from "../../pages/SignUp";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("SignUP Page", () => {
  it("should be able register profile", () => {
    const { getByPlaceholderText, getByText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const firstNameField = getByPlaceholderText("Primeiro nome");
    const secondNameField = getByPlaceholderText("Segundo nome");
    const contactField = getByPlaceholderText("Contato");
    const emailField = getByPlaceholderText("E-mail");
    const cepField = getByPlaceholderText("CEP");
    const numberField = getByPlaceholderText("N°");
    const passwordField = getByPlaceholderText("Digite a senha");
    const addressField = getByPlaceholderText("Endereço");

    fireEvent.change(firstNameField, {
      target: { value: "John" },
    });

    fireEvent.change(secondNameField, {
      target: { value: "Doe" },
    });

    fireEvent.change(contactField, {
      target: { value: "11987474136" },
    });

    fireEvent.change(emailField, {
      target: { value: "johndoe@examplecom" },
    });

    fireEvent.change(emailField, {
      target: { value: "johndoe@examplecom" },
    });

    fireEvent.change(cepField, {
      target: { value: "04766020" },
    });

    fireEvent.change(numberField, {
      target: { value: "314" },
    });

    fireEvent.change(passwordField, {
      target: { value: "123@mudar123" },
    });

    // continued;
  });
});
