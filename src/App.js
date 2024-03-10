import React from "react";
import Form from "./components/Form";
import MediaDisplay from "./components/MediaDisplay";
import "./style/style.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Image and Video Uploader</h1>
      <Form />
      {/* <MediaDisplay /> */}
    </div>
  );
};

export default App;
