import React from "react";
import Lottie from "lottie-react";
import done from "../../assets/animations/done.json";

function DoneAnim() {
  return (
    <div className="loader templete d-flex justify-content-center align-items-center">
      <Lottie
        animationData={done}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
}

export default DoneAnim;
