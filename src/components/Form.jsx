import { useState } from "react";
import Design from "./Design";
import Success from './Success';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="container">
      {!isSubmitted ? <Design submitForm={submitForm} /> : <div><Success/></div>}
    </div>
  );
};

export default Form;
