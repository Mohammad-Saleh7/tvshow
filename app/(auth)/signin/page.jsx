import Form from "../../../components/Signin";
import React from "react";

export const metadata = {
  title: "SignIn",
  description: "This is sign in page",
};

export default function page() {
  return (
    <div>
      <Form
        sign={"Sign In "}
        Password={"Password"}
        Email={"Email"}
        button={"Sign In"}
      />
    </div>
  );
}
