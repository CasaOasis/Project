import React from "react";
import Lottie from "lottie-react";
import error from "../../../assets/animations/error.json";

function Anim() {
  return (
    <div>
        <Lottie className="erros" animationData={error} />
    </div>
  );
}

export default Anim;
