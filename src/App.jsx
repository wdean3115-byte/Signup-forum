import React , { useState } from "react";

import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";

function App() {
  const [step, setstep] = useState(1);
  function next() {
    setstep(step + 1);
  }
  function back() {
    setstep(step - 1);
  }

  return (
    <>
      <div className="w-screen h-screen">
        {step === 1 && <Step1 next={next} />}
        {step === 2 && <Step2 next={next} back={back} />}
        {step === 3 && <Step3 next={next} back={back} />}
      </div>
    </>
  );
}

export default App;
