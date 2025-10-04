"use client";

export default function error({ error, reset }) {
  return (
    <div className="flex justify-center items-center h-screen flex-col px-16 ">
      <p className="border-dashed border-2 border-red-600 px-5 py-8 font-bold">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="bg-indigo-100 px-2 py-1 rounded-lg hover:bg-indigo-950 transition-all duration-300 hover:text-white mt-10"
      >
        try again
      </button>
    </div>
  );
}
