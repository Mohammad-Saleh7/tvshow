import Form from "@/components/SignUp";
import React from "react";

export const metadata = {
  title: "SignUp",
  description: "This is Sign Up page",
};

export default function page() {
  return (
    <div>
      <Form
        sign="Sign Up"
        Fname={"First Name"}
        Lname={"Last Name"}
        Email={"Email"}
        Password={"Password"}
        button={"Sign Up"}
      />
    </div>
  );
}
