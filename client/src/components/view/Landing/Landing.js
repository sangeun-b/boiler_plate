import React, { useEffect } from "react";
import axios from "axios";
function Landing() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <p>Landing page</p>
    </div>
  );
}

export default Landing;
