import React from "react";
import Form from "./components/Form";
import MediaDisplay from "./components/MediaDisplay";
import "./style/style.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="border">Image and Video Uploader</h1>
      <Form />
    </div>
  );
};

export default App;
