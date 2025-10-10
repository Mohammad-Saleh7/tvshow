"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignUp({
  sign,
  Fname,
  Lname,
  Password,
  Email,
  button,
}) {
  const [isAgree, setIsAgree] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const helperText = {
    name: {
      required: "please enter your name",
      minLength: "your input should more than 2 characters",
      maxLength: "your input should less than 31 characters",
    },
    lastName: {
      minLength: "your input should more than 2 characters",
      maxLength: "your input should less than 31 characters",
    },
    email: {
      required: "please enter your email",
      pattern: "Invalid Email Address",
    },
    password: {
      required: "please enter your password",
      pattern: "Minimum eight characters",
    },
  };

  return (
    <div className="mx-auto max-w-sm space-y-6 h-screen flex justify-center flex-col mb-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{sign}</h1>
      </div>
      <form
        className="space-y-4 border-2 border-black px-5 py-10 rounded-3xl dark:border-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">{Fname}</Label>
            <Input
              id="first-name"
              placeholder="First Name"
              {...register("name", {
                required: true,
                maxLength: 31,
                minLength: 2,
              })}
            />
            {errors.name && (
              <p className="text-red-700">
                {helperText.name[errors.name.type]}{" "}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">{Lname}</Label>
            <Input
              id="last-name"
              placeholder="Last Name"
              {...register("lastName", {
                maxLength: 32,
                minLength: 2,
              })}
            />
            {errors.lastName && (
              <p className="text-red-700">
                {helperText.lastName[errors.lastName.type]}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{Email}</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.email && (
            <p className="text-red-700">
              {helperText.email[errors.email.type]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{Password}</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
            })}
          />
          {errors.password && (
            <p className="text-red-700">
              {" "}
              {helperText.password[errors.password.type]}{" "}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer  hover:bg-black hover:text-white py-1.5 border-2 border-black rounded-2xl hover:scale-110 transition-all duration-300 dark:hover:bg-white dark:hover:text-black hover:font-semibold dark:hover:font-semibold dark:border-white"
        >
          {button}
        </button>
      </form>
    </div>
  );
}
