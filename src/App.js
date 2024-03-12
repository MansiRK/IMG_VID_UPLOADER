import React from "react";
import Form from "./components/Form";
import "./style/style.css";

// Main component of the application
const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Image and Video Uploader</h1>
      {/* Form component */}
      <Form />
    </div>
  );
};

export default App;
