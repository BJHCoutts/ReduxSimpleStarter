//create a new comonent that produces html
//take component's generated HTML and put in the DOM on the page

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hi!</div>;
};

ReactDOM.render(<App />, document.getElementById("container"));
