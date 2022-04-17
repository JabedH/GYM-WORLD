import React from "react";
import notFound from "../../img/notfound.png";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        style={{ margin: "0 auto" }}
        className="w-50 "
        src={notFound}
        alt=""
      />
    </div>
  );
};

export default NotFound;
