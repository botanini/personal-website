import React from "react";

const ResumePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        src="/resume_217.pdf"
        className="w-full h-full"
        style={{ height: "90vh", width: "80vw" }}
      />
    </div>
  );
};

export default ResumePage;
