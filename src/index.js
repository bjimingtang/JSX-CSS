import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        alt="image_1"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      ></img>
      <img
        alt="image_2"
        src="https://static.toiimg.com/photo/72975551.cms"
      ></img>
      <img
        alt="image_3"
        src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
