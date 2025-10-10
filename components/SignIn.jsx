"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function SignIn({ sign, Password, Email, button }) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const helperText = {
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
