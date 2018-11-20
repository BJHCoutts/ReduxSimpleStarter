//create a new comonent that produces html
//take component's generated HTML and put in the DOM on the page

import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
