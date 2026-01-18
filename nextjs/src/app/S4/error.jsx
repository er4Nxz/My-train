"use client";
const error = ({ error, reset }) => {
    
  return (
    <div>
      {error.message}
      <button
        className="bg-cyan-300 p-3 cursor-pointer rounded-2xl block"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default error;