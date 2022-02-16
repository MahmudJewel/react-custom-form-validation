import { useState } from "react";

const EventHandling = () =>{
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
      });
      const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
        // console.log('you entered ', values)
      };
      const clickOnsubmit = (e) =>{
        e.preventDefault();
        console.log('your submission : ', values)
      }
    return {handleChange, clickOnsubmit, values}
}

export default EventHandling;