"use client";
const error = ({ error, reset }) => {
  console.log(error);
  
  return (
    <div>
      {error.message}
      <button
        className="bg-red-400 p-3 cursor-pointer rounded-2xl block"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default error;
