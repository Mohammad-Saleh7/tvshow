import React from "react";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Tv Show",
  description: "This is my Tv Show",
};

export default function page() {
  return (
    <div>
      <HomeClient />
    </div>
  );
}
